const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/api/products');
const logger = require('morgan');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger(process.env.NODE_ENV === 'dev' ? 'dev' : 'tiny'));


app.use('/api/v1/products', productsRouter);

app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
   const { status = 500, message = "Internal Server Error" } = err;
   res.status(status).json({message});
});

module.exports = app;
