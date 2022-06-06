const {Schema, model} = require('mongoose');
const Joi = require("joi");

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'employee'],
        default: 'employee',
    }
}, {timestamps: true});

const User = model('user', schema);

const schemaRegister = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(), //TODO: add pattern
    password: Joi.string().required(),
    role: Joi.string(),
});

module.exports = {
    User, schemaRegister
}

