const express = require('express');
const {registerUser, loginUser, logoutUser} = require('../../controllers');
const router = express.Router();
const {schemaRegister, schemaLogin} = require('../../models/user');
const {validateRequest} = require('../../middlewares/validateRequest');
const {auth} = require('../../middlewares/auth');



router.post('/registration', validateRequest(schemaRegister), registerUser);
router.post('/login', validateRequest(schemaLogin), loginUser);
router.post('/logout', auth, logoutUser);

module.exports = router;
