module.exports = class InvalidParamError extends Error {
  constructor(paramName, messageToClient, statusCode) {
    super(`Invalid param: ${paramName}`);
    this.name = "InvalidParamError";
    this.messageToClient = messageToClient;
    this.statusCode = statusCode ? statusCode : 400;
  }
};
