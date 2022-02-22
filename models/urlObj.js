const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    click: {
        type: Number,
        required: true,
        default: 0
    }
});


module.exports = mongoose.model('urlObj', urlSchema)