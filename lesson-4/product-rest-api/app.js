const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/api/products');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/products', productsRouter);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" });
});

module.exports = app;
