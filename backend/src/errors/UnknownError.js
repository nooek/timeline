module.exports = class UnknownError extends Error {
  constructor() {
    super(`Unknown error`);
    this.name = "UknownError";
    this.messageToClient = "An error occured. Please try again later";
    this.statusCode = 400;
  }
};
