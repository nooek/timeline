const { memoryC } = require("../../../main/controllers/memory/exports")
const HttpResponse = require("../../factories/HttpResponse")

class CreateMemory {
    async returnHttpResponse(httpRequest) {
        try {
            const { body } = httpRequest
            const memory = await memoryC.createMemory(body)

            console.log(memory)

            return new HttpResponse().makeRes(memory)
        } catch(err) {
            return new HttpResponse().makeError(err)
        }
    }
}

module.exports = CreateMemory