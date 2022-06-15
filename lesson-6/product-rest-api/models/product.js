const {Schema, model} = require('mongoose');
const Joi = require("joi");


const codeRegex = /\d{6}/;
const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    code: {
        type: String,
        required: true,
        match: codeRegex,
        unique: true,
        // якщо unique не працює - перевір чи створився в базі індекс для цього поля
    },
    price: {
        type: Number,
        required: true,
    }
});

const schemaCreate = Joi.object({
    price: Joi.number().min(0).required(),
    name: Joi.string().min(3).required(),
    code: Joi.string().pattern(codeRegex).required(),
    available: Joi.bool(),
});
const schemaPatch = Joi.object({
    available: Joi.bool().required(),
});


const Product = model('product', schema);

module.exports = {
    Product, schemaCreate, schemaPatch
}

