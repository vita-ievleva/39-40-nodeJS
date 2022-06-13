const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const productsRouter = require('./routes/api/products');
const authRouter = require('./routes/api/auth');
const usersRouter = require('./routes/api/users');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger(process.env.NODE_ENV === 'dev' ? 'dev' : 'tiny'));
app.use(express.static('public'))

app.use('/api/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/products', productsRouter);

app.use((req, res, next) => {
    next({status: 404, message: "Not Found"});
});

app.use((err, req, res, next) => {
   const { status = 500, message = "Internal Server Error" } = err;
   res.status(status).json({message});
});

module.exports = app;
