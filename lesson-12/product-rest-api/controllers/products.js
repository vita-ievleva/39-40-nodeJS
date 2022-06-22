const {products} = require("../services");
const {createError} = require("../helpers/errors");

const getAll = async (req, res, next) => {
    try {
        // req.query   ?available=true
        const all = await products.getAll(req.query);
        res.json(all);
    } catch (e) {
        next(e);
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await products.getById(id);
        if(!product) {
            throw createError(404, "Not found");
        }
        res.json(product);
    } catch (e) {
        next(e);
    }
}

const create = async (req, res, next) => {
    try {
        const {_id} = req.user;
        const product = await products.create(req.body, _id);
        res.status(201).json(product);
    } catch (e) {
        if(e.message.includes('duplicate')){
            e.status = 400
        }
        next(e);
    }
}

const updateById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await products.updateById(id, req.body);
        if(!product) {
            throw createError(404, "Not found");
        }
        res.json(product);
    } catch (e) {
        next(e);
    }
}

const updateAvailability = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await products.updateById(id, req.body);
        if(!product) {
            throw createError(404, "Not found");
        }
        res.json(product);
    } catch (e) {
        next(e);
    }
}

const deleteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await products.deleteById(id);
        if(!product) {
            throw createError(404, "Not found");
        }
        res.status(204).json();
    } catch (e) {
        next(e);
    }
}

module.exports = {
    getAll, getById, create, updateById, deleteById, updateAvailability
}
