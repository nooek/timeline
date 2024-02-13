const { userLoginUC } = require("../../../domain/use-cases/user/exports");

class UserLoginC {
    constructor(UserInfra, Encrypter, UserNotFoundError, InvalidParamError) {
        this.UserInfra = UserInfra;
        this.Encrypter = Encrypter;
        this.UserNotFoundError = UserNotFoundError;
        this.InvalidParamError = InvalidParamError;
    }

    async login(info) {
        const loginInfo = await userLoginUC.create(info)

        const user = await new this.UserInfra().login(loginInfo)
        if (!user) {
          throw new this.UserNotFoundError()
        }

        const passwordMatch = await new this.Encrypter(loginInfo.password).compare(user.password)

        if (passwordMatch === false) {
            throw new this.InvalidParamError("Password or Email", "Email or password incorrect")
        }

        return { name: user.name, email: user.email }
    }
}

module.exports = UserLoginC;
