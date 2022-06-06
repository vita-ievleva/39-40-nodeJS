const authService = require('../services/auth.service');


const registerUser = async (req, res, next) => {
    try {
        const user = await authService.registerUser(req.body);
        res.json({
            name: user.name,
            email: user.email,
            role: user.role,
            id: user._id
        });
    } catch (e) {
        next(e);
    }
}

module.exports = {
    registerUser
}
