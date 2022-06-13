const authService = require('../services/auth.service');


const registerUser = async (req, res, next) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json({
            name: user.name,
            email: user.email,
            role: user.role,
            id: user._id,
            avatarURL: user.avatarURL,
        });
    } catch (e) {
        next(e);
    }
}

const loginUser = async (req, res, next) => {
    try {
        const token = await authService.loginUser(req.body);
        res.json(token);
    } catch (e) {
        next(e);
    }
}

const logoutUser = async (req, res, next) => {
    try {
        await authService.logoutUser(req.user._id);
        res.sendStatus(204);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    registerUser, loginUser, logoutUser
}
