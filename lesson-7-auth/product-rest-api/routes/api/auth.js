const express = require('express');
const {registerUser} = require('../../controllers/auth');
const router = express.Router();
const {schemaRegister} = require('../../models/user');
const {validateRequest} = require('../../middlewares/validateRequest');



router.post('/registration', validateRequest(schemaRegister), registerUser);

module.exports = router;
