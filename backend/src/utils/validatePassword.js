const isPasswordValid = (password) => {
    if (password.length < 8 || !/\d/.test(password)) {
        return {
            valid: false,
            message: "Your password must have at least 8 characters and a number"
        };
    }
    return {
        valid: true
    };
}

module.exports = isPasswordValid;
