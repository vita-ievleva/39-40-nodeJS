// #### 4 Algorithm
// 1. Get token from Request headers
// 2. Validate token
// 3. Extract user id and find user by id
// 4. Verify that user token and save token
// 5. Write user to Request

const {authenticateUser} = require('../services/auth.service');
const authError = {status: 401, message: 'Bad credentials'};

const auth = async (req, res, next) => {
     const {authorization = ""} = req.headers;
     const [bearer, token] = authorization.split(' ');

     if(bearer !== 'Bearer' || !token) {
         next(authError);
     }

     const user = await authenticateUser(token);
     if(!user) {
         next(authError);
     }
     req.user = user;
     next();
}

const author = (role) => {
    return (req, res, next) => {
        if(req.user.role !== role){
            next({status: 403, message: 'Forbidden'})
        }
        next();
    }
}

module.exports = {
    auth, author,
};
