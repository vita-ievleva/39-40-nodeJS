const jwt = require('jsonwebtoken');

const SECRET_KEY = 'qwerty123';

const payload = {
    userId: '123',
    admin: false,
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'});
console.log(token);

jwt.verify(token, SECRET_KEY)
