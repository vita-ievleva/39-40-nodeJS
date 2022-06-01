const express = require('express');
const Joi = require('joi');
const products = require("../../models/products");
const { ValidationError, createError } = require('../../errors')

const router = express.Router();

const schema = Joi.object({
    price: Joi.number().min(0.1).required(),
    name: Joi.string().min(3).required(),
})

router.get('/', async (req, res, next) => {
    try {
        const all = await products.getAll();
        res.json(all);
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
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
});

router.post('/', async (req, res, next) => {
    try {
        const {error} = schema.validate(req.body);
        if(error) {
            // 1. throw new ValidationError(400, error.message);
            throw createError(400, error.message);
        }
        const { price, name } = req.body;
        const product = await products.create(price, name);
        res.status(201).json(product);
    } catch (e) {
        next(e);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const { error } = schema.validate(req.body);
        if(error) {
            throw createError(400, error.message);
        }
        const { name, price } = req.body;
        const { id } = req.params;
        const product = await products.updateById(id, price, name);
        if(!product) {
            throw createError(404, "Not found");
        }
        res.json(product);
    } catch (e) {
        next(e);
    }
});

router.delete('/:id', async (req, res, next) => {
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
});

module.exports = router;
