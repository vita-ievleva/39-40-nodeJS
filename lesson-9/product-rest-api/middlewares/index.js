const {author, auth} = require('./auth');
const {validateId} = require('./verifyId');
const {validateRequest} = require('./validateRequest');

module.exports = {
    auth, author, validateId, validateRequest,
}
