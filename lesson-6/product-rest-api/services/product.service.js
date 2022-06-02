const { Product } = require('../models/product');


const getAll = async () => {
    return Product.find({}, {}, {});
}

const getById = async (id) => {
    return Product.findById(id);
}

const create = async (product) => {
    return Product.create(product);
}

const updateById = async (id, product) => {
    return Product.findByIdAndUpdate(id, product, { new: true });
}

const deleteById = async (id) => {
    return Product.findByIdAndDelete(id);
}

module.exports = {
    updateById, create, getById, getAll, deleteById
}
