const { userC } = require("../../../main/controllers/user/exports")
const HttpResponse = require("../../factories/HttpResponse")

class CreateUser {
    async returnHttpResponse(httpRequest) {
        try {
            const { body } = httpRequest
            const user = await userC.createUser(body)

            console.log(user)

            return new HttpResponse().makeRes(user)
        } catch(err) {
            return new HttpResponse().makeError(err)
        }
    }
}

module.exports = CreateUser