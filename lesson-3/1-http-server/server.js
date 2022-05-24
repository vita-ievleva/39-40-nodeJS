/*
Створити веб сервер за допомогою NodeJS Api
1. path '/' - hello world
2. path '/products' - list of products

// Access-Control-Allow-Origin
*/

const http = require('http');
const products = require('./products');


const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const url = req.url;
    const method = req.method;

    if(url === '/' && method === 'GET') {
        console.log('in /');

        res.write('Hello world');

    } else if(url === '/products' && method === 'GET') {
        const all = await products.getAll();
        res.write(JSON.stringify(all));
    }
    res.end();
});


const PORT = 8081;
server.listen(PORT, () => {
    console.log(`Server in on ${PORT}`);
})
