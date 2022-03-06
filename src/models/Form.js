const { Schema, model } = require('mongoose');

const FormSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true })


module.exports = model('Form', FormSchema)