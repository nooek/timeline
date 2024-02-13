class UserLoginUC {
    constructor(MissingParamError, InvalidParamError) {
        this.MissingParamError = MissingParamError;
        this.InvalidParamError = InvalidParamError;
    }

    async create(loginInfo) {
        if (!loginInfo.email) {
            throw new this.MissingParamError("Email", "Please provide an email")
        }

        if (!loginInfo.password) {
            throw new this.MissingParamError("Email", "Please provide a password")
        }

        return loginInfo
    }
}

module.exports = UserLoginUC;
