const { userLoginC } = require("../../../main/controllers/user/exports")
const HttpResponse = require("../../factories/HttpResponse")

class LoginUser {
    async returnHttpResponse(httpRequest) {
        try {
            const { query } = httpRequest
            console.log(httpRequest)
            const user = await userLoginC.login(query)

            return new HttpResponse().makeRes(user)
        } catch(err) {
            return new HttpResponse().makeError(err)
        }
    }
}

module.exports = LoginUser