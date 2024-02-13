const bcrypt = require("bcrypt")

class Encrypter {
  constructor(aString) {
    this.aString = aString;
  }

  async encrypt() {
    if (this.aString) {
      const saltRounds = 10
      const salt = await bcrypt.genSalt(saltRounds)
      const hashedString = await bcrypt.hash(this.aString, salt)
      return hashedString
    }
    throw new Error("No string passed to encrypt")
  }

  async compare(hashedPwd) {
    console.log(hashedPwd)
    if (this.aString) {
      const isEqual = await bcrypt.compare(this.aString, hashedPwd)
      return isEqual
    }
    throw new Error("No string passed to encrypt")
  }
}

module.exports = Encrypter;