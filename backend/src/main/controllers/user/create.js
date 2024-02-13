const { userUC } = require("../../../domain/use-cases/user/exports");

class UserCreateC {
    constructor(UserInfra, UnknownError, InvalidParamError) {
        this.UserInfra = UserInfra
        this.UnknownError = UnknownError
        this.InvalidParamError = InvalidParamError
    }

    async createUser(userData) {
        const user = await userUC.create(userData)
        console.log("Data received: " + userData.password)

        if (!user) {
            throw new this.UnknownError()
        }

        const createUserInDB = await new this.UserInfra().create(user)
        console.log(createUserInDB)

        if (createUserInDB.message) {
            throw new this.InvalidParamError("User", createUserInDB.message)
        }
        if (!createUserInDB && !createUserInDB.message) {
            throw new this.UnknownError()
        }

        return {
            email: user.email,
            name: user.name
        }
    }
}

module.exports = UserCreateC
