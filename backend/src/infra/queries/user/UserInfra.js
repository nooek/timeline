const UserS = require("../../models/UserModel");

class UserInfra {
    async create(user) {
        try {
            const newUser = new UserS({ name: user.name, email: user.email, password: user.password })
            await newUser.save();
            return true
        } catch (err) {
            console.log(err.message)
            if (err.message.includes("duplicate key")) {
                return {
                    message: "This is email already exists"
                }
            }
            return false
        }
    }

    login(loginInfo) {
        try {
            const user = UserS.findOne({ 'email': loginInfo.email });
            return user
        } catch(err) {
            return false
        }
    }
}

module.exports = UserInfra;
