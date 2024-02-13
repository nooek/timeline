const { UnknownError, UserNotFoundError, InvalidParamError } = require("../../../errors")
const UserInfra = require("../../../infra/queries/user/UserInfra")
const Encrypter = require("../../../utils/Encrypter")

const UserCreateC = require("./create")
const UserLoginC = require("./login")

const userC = new UserCreateC(UserInfra, UnknownError, InvalidParamError)
const userLoginC = new UserLoginC(UserInfra, Encrypter, UserNotFoundError, InvalidParamError)

module.exports = {
  userC,
  userLoginC
};
