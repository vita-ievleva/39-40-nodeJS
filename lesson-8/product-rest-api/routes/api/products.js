const express = require('express');
const {getAll, getById, create, updateById, deleteById, updateAvailability} = require('../../controllers/products');
const router = express.Router();
const {schemaPatch, schemaCreate} = require('../../models/product');
const {validateRequest} = require('../../middlewares/validateRequest');


router.get('/', getAll);
// TODO: add validation for id using mongoose function isValidObjectId (for sending correct status)
router.get('/:id', getById);
router.post('/', validateRequest(schemaCreate), create);
router.put('/:id', updateById);
router.patch('/:id/available', validateRequest(schemaPatch), updateAvailability);
router.delete('/:id', deleteById);

module.exports = router;
