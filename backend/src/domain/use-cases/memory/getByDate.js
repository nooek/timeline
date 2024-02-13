class MemoryByDateUC {
    constructor(InvalidParamError, MissingParamError) {
        this.InvalidParamError = InvalidParamError;
        this.MissingParamError = MissingParamError;
    }

    create(memoryInfo) {
        if (!memoryInfo.year && !memoryInfo.month && !memoryInfo.day) {
            throw new this.MissingParamError("date", "Provide a date")
        }

        return memoryInfo
    }
}

module.exports = MemoryByDateUC
