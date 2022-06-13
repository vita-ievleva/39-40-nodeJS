const {loginUser, logoutUser, registerUser} = require('./auth');
const {getAll, getById, deleteById, create, updateById, updateAvailability} = require('./products');

module.exports = {
    loginUser,
    logoutUser,
    registerUser,
    getAll,
    getById,
    deleteById,
    create,
    updateById,
    updateAvailability,
}
