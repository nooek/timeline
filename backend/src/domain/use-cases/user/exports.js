const isEmailValid = require("../../../utils/validateEmail");
const isPasswordValid = require("../../../utils/validatePassword");
const Encrypter = require("../../../utils/Encrypter");
const { MissingParamError, InvalidParamError } = require("../../../errors");

const UserUC = require( "./create.js");
const UserLoginUC = require("./login.js");

const userUC = new UserUC(isPasswordValid, isEmailValid, Encrypter, MissingParamError, InvalidParamError)
const userLoginUC = new UserLoginUC(MissingParamError, InvalidParamError)

module.exports = {
    userUC,
    userLoginUC
}
