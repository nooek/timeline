const { UnknownError, MemoryNotFoundError } = require("../../../errors");
const MemoryInfra = require("../../../infra/queries/memory/MemoryInfra");

const MemoryCreateC = require("./create");
const MemoryByDateC = require("./getByDate")

const memoryC = new MemoryCreateC(MemoryInfra, UnknownError)
const memoryByDateC = new MemoryByDateC(MemoryInfra, UnknownError, MemoryNotFoundError)

module.exports = {
    memoryC,
    memoryByDateC
}