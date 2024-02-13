const { memoryUC } = require("../../../domain/use-cases/memory/exports");

class MemoryCreateC {
  constructor(MemoryInfra, UnknownError) {
    this.MemoryInfra = MemoryInfra;
    this.UnknownError = UnknownError;
  }

  async createMemory(memoryInfo) {
    const memory = memoryUC.create(memoryInfo);
    console.log("RECEIVED: " + memory);

    if (!memory) {
      throw new this.UnknownError();
    }

    const createMemoryInDB = await new this.MemoryInfra().create(memory);

    if (!createMemoryInDB) throw new this.UnknownError();

    return memory;
  }
}

module.exports = MemoryCreateC;
