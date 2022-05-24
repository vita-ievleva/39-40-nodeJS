const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');

const server = express();

server.use(cors());
server.use(express.json());


server.use('/products', productsRouter);


server.get('/', (req, res) => {
    res.send('Hello world');
});

server.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" });
});


const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server in on ${PORT}`);
})
