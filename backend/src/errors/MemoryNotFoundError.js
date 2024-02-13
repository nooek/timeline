module.exports = class MemoryNotFoundError extends Error {
  constructor() {
    super(`Memory not found error`);
    this.name = "MemoryNotFoundError";
    this.messageToClient = "No memory was found";
    this.statusCode = 400;
  }
};
