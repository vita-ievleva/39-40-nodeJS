const express = require('express');
const logger = require('morgan');
const app = express();
const sweetsRouter = require('./routes/sweets');
const workerRouter = require('./routes/workers');

app.use(express.json(), logger('dev'));


app.use('/api/v1/sweets', sweetsRouter)
app.use('/api/v1/workers', workerRouter)


module.exports = app;
