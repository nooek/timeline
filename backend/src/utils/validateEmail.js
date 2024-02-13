const validator = require("email-validator");

const isEmailValid = (email) => {
    if (validator.validate(email)) {
        return {
            valid: true
        }
    } else {
        return {
            valid: false,
            message: "Email invalid"
        }
    }
    return validator.validate(email)
}

module.exports = isEmailValid;
