const { MissingParamError, InvalidParamError } = require("../../../errors");

const MemoryUC = require("./create");
const MemoryByDateUC = require("./getByDate")

const memoryUC = new MemoryUC(InvalidParamError, MissingParamError)
const memoryByDateUC = new MemoryByDateUC(InvalidParamError, MissingParamError)

module.exports = {
    memoryUC,
    memoryByDateUC
}