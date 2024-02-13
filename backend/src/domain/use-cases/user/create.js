const User = require("../../../entities/User")

class UserUC {
    constructor(isPasswordValid, isEmailValid, Encrypter, MissingParamError, InvalidParamError) {
      this.isPasswordValid = isPasswordValid
      this.isEmailValid = isEmailValid
      this.Encrypter = Encrypter
      this.MissingParamError = MissingParamError
      this.InvalidParamError = InvalidParamError
    }

    async create(userData) {
        const user = new User(userData)

        if (!user.name) {
          throw new this.MissingParamError("Name", "Please provide a name")
        }

        if (!user.email) {
          throw new this.MissingParamError("Email", "Please provide an email")
        }

        const emailValid = this.isEmailValid(user.email)
        console.log(emailValid)
        if (!emailValid.valid) {
          throw new this.InvalidParamError("Email", emailValid.message)
        }

        if (!user.password) {
          throw new this.MissingParamError("Email", "Please provide a password")
        }
        const passwordValid = this.isPasswordValid(user.password)
        if (!passwordValid.valid) {
          throw new this.InvalidParamError("Password", passwordValid.message)
        }

        const passwordEnctrypted = await new this.Encrypter(user.password).encrypt()

        return {
          name: user.name,
          email: user.email,
          password: passwordEnctrypted
        }
    }
}

module.exports = UserUC
