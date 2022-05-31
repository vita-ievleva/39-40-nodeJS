const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: String,
    price: {
        type: Number,
        min: 0.5
    }
});

const Sweet = model('sweet', schema);

module.exports = Sweet;
