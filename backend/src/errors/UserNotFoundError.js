module.exports = class UserNotFoundError extends Error {
  constructor() {
    super(`User not found error`);
    this.name = "UserNotFoundError";
    this.messageToClient = "This account does not exist";
    this.statusCode = 400;
  }
};
