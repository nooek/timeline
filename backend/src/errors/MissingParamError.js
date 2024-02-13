module.exports = class MissingParamError extends Error {
  constructor(paramName, messageToClient, statusCode) {
    super(`Missing param: ${paramName}`);
    this.name = "MissingParamError";
    this.messageToClient = messageToClient;
    this.statusCode = statusCode ? statusCode : 400;
  }
};
