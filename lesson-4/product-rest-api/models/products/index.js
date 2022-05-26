const fs = require('fs').promises;
const path = require('path');
const uuid = require('uuid');

const productPath = path.join(__dirname, 'products.json');

const getAll = async () => {
    const dataString = await fs.readFile(productPath, 'utf8');
    const data = JSON.parse(dataString);
    return data;
}

const getById = async (id) => {
    const allProducts = await getAll();
    const product = allProducts.find(product => product.id === id);
    return product ? product : null;
}

const create = async (price, name) => {
    const newProduct = {
        id: uuid.v4(),
        price: price,
        name: name,
    };
    const allProducts = await getAll();
    allProducts.push(newProduct);

    await fs.writeFile(productPath, JSON.stringify(allProducts, null, 2));
    return newProduct;
}

const updateById = async (id, price, name) => {
    const allProducts = await getAll();
    const productIndex =
        allProducts.findIndex(product => product.id === id);
    if(productIndex !== -1) {
        allProducts[productIndex].price = price;
        allProducts[productIndex].name = name;

        await fs.writeFile(productPath, JSON.stringify(allProducts, null, 2));
        return allProducts[productIndex];
    } else {
        return null;
    }
}

const deleteById = async (id) => {
    const allProducts = await getAll();
    const index = allProducts.findIndex(product => product.id === id);

    const deletedProduct = allProducts[index];
    if(index !== -1) {
        allProducts.splice(index, 1);
        await fs.writeFile(productPath, JSON.stringify(allProducts, null, 2));
    }
    return deletedProduct ? deletedProduct : null;
}

module.exports = {
    updateById, create, getById, getAll, deleteById
}
