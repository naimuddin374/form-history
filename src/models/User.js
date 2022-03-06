const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        require: true,
    },
}, { timestamps: true })


module.exports = model('User', UserSchema)