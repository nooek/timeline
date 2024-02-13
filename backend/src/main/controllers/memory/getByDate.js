const { memoryByDateUC } = require("../../../domain/use-cases/memory/exports");

class MemoryByDateC {
    constructor(MemoryInfra, UnknownError, MemoryNotFoundError) {
        this.MemoryInfra = MemoryInfra;
        this.UnknownError = UnknownError;
        this.MemoryNotFoundError = MemoryNotFoundError;
    }

    async searchMemory(memoryInfo) {
        try {
        const info = memoryByDateUC.create(memoryInfo)

        console.log(info)

        if (!info) {
            throw new this.UnknownError()
        }

        const memory = await new this.MemoryInfra().getByDate(info)

        if (memory.found) {
            return memory.memories
        } else {
            throw new this.MemoryNotFoundError()
        }
        } catch(err) {
            console.log(err)
        }
    }
}

module.exports = MemoryByDateC