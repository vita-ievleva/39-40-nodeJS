const {User} = require('../models/user');
const {createError} = require("../helpers/errors");
const bcrypt = require('bcryptjs');


// 1. if User exists in our db -> send error status 409;
// 2. if it is a new User -> hash and salt password -> save User to DB

const registerUser = async (userData) => {
    const result = await User.findOne({email: userData.email});
    if(result) {
        throw createError(409, 'User already exists.')
    }

    const password = userData.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user =
        await User.create({
            ...userData,
            password: hashedPassword,
        });

    return user;
}

module.exports = {
    registerUser,
}
