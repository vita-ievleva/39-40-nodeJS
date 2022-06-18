const { Product } = require('../models/product');


const getAll = async (query) => {
    const {page, limit} = query;
    const skipped = (page-1) * limit;
    const skip = skipped < 0 ? 0 : skipped;

    return Product.find({}, {}, {skip, limit: +limit})
        .populate('createdBy', 'name role');
}

const getById = async (id) => {
    return Product.findById(id);
}

const create = async (product, id) => {
    return Product.create({...product, createdBy: id});
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
