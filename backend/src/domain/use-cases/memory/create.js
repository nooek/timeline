const Memory = require("../../../entities/Memory");

class MemoryUC {
    constructor(InvalidParamError, MissingParamError) {
        this.InvalidParamError = InvalidParamError;
        this.MissingParamError = MissingParamError;
    }

    create(memoryInfo) {
        const memory = new Memory(memoryInfo)

        if (!memory.date) throw new this.MissingParamError("date", "The memory needs a date")
        if (!memory.memories) throw new this.MissingParamError("memory", "The memory needs a memory")
        if (!memory.memories.length) throw new this.MissingParamError("memory", "The memory needs a memory")
        if (!memory.owner) throw new this.MissingParamError("owner", "The memory needs an owner")

        if (memory.title) {
            if (memory.title.length < 3) {
                throw new this.InvalidParamError("Title", "The title must have at least 3 characters")
            }
            if (memory.title.length > 50) {
                throw new this.InvalidParamError("Title", "The title must have no more than 50 characters")
            }
        }

        if (memory.desc) {
            if (memory.desc.length < 20) {
                throw new this.InvalidParamError("Desc", "The description must have at least 20 characters")
            }

            if (memory.desc.length > 15000) {
                throw new this.InvalidParamError("Desc", "The description must have no more than 50 characters")
            }
        }

        return memory
    }
}

module.exports = MemoryUC