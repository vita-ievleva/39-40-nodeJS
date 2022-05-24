const express = require('express');
const products = require("../products");

const router = express.Router();


router.use((req, res, next) => {
    console.log('in products');
    next();
})

router.get('/', async (req, res) => {
    const all = await products.getAll();
    res.json(all);
    // res.send(Buffer.from('123'))
    // res.json(Buffer.from('123'))
});

router.get('/cookies', async (req, res) => {
    const all = await products.getAll();
    res.json(all);
    // res.send(Buffer.from('123'))
    // res.json(Buffer.from('123'))
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await products.getById(id);
    res.json(product);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const { price, name } = req.body;
    await products.create(price, name);
    res.status(201).end();
});

module.exports = router;
