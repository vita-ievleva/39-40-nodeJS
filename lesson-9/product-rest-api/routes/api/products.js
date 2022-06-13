const express = require('express');
const {getAll, getById, create, updateById, deleteById, updateAvailability} = require('../../controllers');
const router = express.Router();
const {schemaPatch, schemaCreate, schemaUpdate} = require('../../models/product');
const {validateId,validateRequest, auth, author} = require('../../middlewares');


router.get('/', auth, getAll);
router.get('/:id', validateId, getById);
router.post('/', validateRequest(schemaCreate), auth, create);
router.put('/:id', validateId, auth, validateRequest(schemaUpdate), updateById);
router.patch('/:id/available', validateId, validateRequest(schemaPatch), updateAvailability);
router.delete('/:id', validateId, auth, author('admin'), deleteById);

module.exports = router;
