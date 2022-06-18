const express = require('express');
const {register, login, logout} = require('../../controllers');
const router = express.Router();
const {schemaRegister, schemaLogin} = require('../../models/user');
const {validateRequest} = require('../../middlewares/validateRequest');
const {auth} = require('../../middlewares/auth');



router.post('/registration', validateRequest(schemaRegister), register);
router.post('/login', validateRequest(schemaLogin), login);
router.post('/logout', auth, logout);

module.exports = router;
