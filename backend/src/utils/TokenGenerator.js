const jwt = require("jsonwebtoken");

class TokenGenerator {
  constructor(tokenInfo) {
    this.tokenInfo = tokenInfo;
  }

  async generate() {
    if (this.tokenInfo) {
      const token = await jwt.sign(this.tokenInfo, process.env.TOKEN_KEY)
      return token
    }
    return "the token info was not provided"
  }
}

module.exports = TokenGenerator;