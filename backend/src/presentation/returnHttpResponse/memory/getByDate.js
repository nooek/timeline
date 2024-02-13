const { memoryByDateC } = require("../../../main/controllers/memory/exports")
const HttpResponse = require("../../factories/HttpResponse")

class GetMemoryByDate {
    async returnHttpResponse(httpRequest) {
        try {
            const { query } = httpRequest
            const memories = await memoryByDateC.searchMemory(query)

            return new HttpResponse().makeRes(memories)
        } catch(err) {
            return new HttpResponse().makeError(err)
        }
    }
}

module.exports = GetMemoryByDate;