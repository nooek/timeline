const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const schema = new Schema({
    owner: {
        type: String,
        required: true
    },
    title: {
        type: String,
        maxLength: 50
    },
    desc: {
        type: String,
        maxLength: 15000
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    memories: {
        type: Array,
        data: Buffer,
        contentType: String,
        required: true
    }
})

const MemoryS = mongoose.model("memory", schema)

module.exports = MemoryS