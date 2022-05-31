const express = require('express');
const router = express.Router();
const Sweet = require('../models/sweet');

router.get('/', async (req, res, next) => {
    const sweets = await Sweet.find();
    res.json(sweets);
});

router.post('/', async (req, res, next) => {
    const sweet = await Sweet.create(req.body);
    res.json(sweet);
});

module.exports = router;
