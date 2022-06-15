const authService = require('../services/auth.service');


const register = async (req, res, next) => {
    try {
        const user = await authService.registerUser(req.body);
        return res.status(201).json({
            code: 201,
            data: {
                name: user.name,
                email: user.email,
                role: user.role,
                id: user._id,
                avatarURL: user.avatarURL,
            }
        });
    } catch (e) {
        next(e);
    }
}

const login = async (req, res, next) => {
    try {
        const token = await authService.loginUser(req.body);
        return res.json({
            code: 200,
            data: token,
        });
    } catch (e) {
        next(e);
    }
}

const logout = async (req, res, next) => {
    try {
        await authService.logoutUser(req.user._id);
        res.sendStatus(204);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    register, login, logout,
}
