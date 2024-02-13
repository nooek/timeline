const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const schema = new Schema ({
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 32
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
})

const UserS = mongoose.model("user", schema)

module.exports = UserS;
