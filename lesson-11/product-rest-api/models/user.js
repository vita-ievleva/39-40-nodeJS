const {Schema, model} = require('mongoose');
const Joi = require("joi");
const gravatar = require('gravatar');
const {v4} = require('uuid');

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
    },
    token: {
        type: String,
        default: null,
    },
    avatarURL: {
        type: String,
        default: function () {
            return gravatar.url(this.email, {}, true);
        }
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        default: function () {
            return v4();
        }
    },
}, {timestamps: true});

const User = model('user', schema);

const schemaRegister = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(), //TODO: add pattern
    password: Joi.string().required(),
    role: Joi.string(),
});

const schemaLogin = Joi.object({
    email: Joi.string().required(), //TODO: add pattern
    password: Joi.string().required(),
});

module.exports = {
    User, schemaRegister, schemaLogin,
}

