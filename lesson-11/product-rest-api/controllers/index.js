const {login, logout, register, confirm, resend} = require('./auth');
const {getAll, getById, deleteById, create, updateById, updateAvailability} = require('./products');

module.exports = {
    login,
    logout,
    register,
    confirm,
    resend,
    getAll,
    getById,
    deleteById,
    create,
    updateById,
    updateAvailability,
}
