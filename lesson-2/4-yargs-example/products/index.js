// написати інтерфейс взаємодії з data
// READ All,
// READ ONE,
// ADD,
// CREATE,
// DELETE


const fs = require('fs').promises;
const path = require('path');
const uuid = require('uuid');

const productPath = path.join(__dirname, 'products.json');
// console.log('productPath', productPath);

const getAll = async () => {
    const dataString = await fs.readFile(productPath, 'utf8');
    const data = JSON.parse(dataString);
    return data;
}
// getAll().then(value => console.log(value));

const getById = async (id) => {
    const allProducts = await getAll();
    const product = allProducts.find(product => product.id === id);
    return product ? product : null;
}
// getById('48bd1cd8-72ca-42cc-8457-156bb8c30873').then(value => console.log(value));

const create = async (price, name) => {
    const newProduct = {
        id: uuid.v4(),
        price: price,
        name: name,
    };
    const allProducts = await getAll();
    allProducts.push(newProduct);

    await fs.writeFile(productPath, JSON.stringify(allProducts));
}
// create(4500, 'mango');

const updateById = async (id, price, name) => {
    const allProducts = await getAll();
    const productIndex =
        allProducts.findIndex(product => product.id === id);
    if(productIndex !== -1) {
        allProducts[productIndex].price = price;
        allProducts[productIndex].name = name;

        await fs.writeFile(productPath, JSON.stringify(allProducts));
    }
}
// updateById(
//     'cf050c0e-3bac-4a51-9557-58e4b7fe3359',
//     4700,
//     'mango');

const deleteById = async (id) => {
    const allProducts = await getAll();
    const index = allProducts.findIndex(product => product.id === id);

    const deletedProduct = allProducts[index];
    if(index !== -1) {
        allProducts.splice(index, 1);
        await fs.writeFile(productPath, JSON.stringify(allProducts));
    }
    return deletedProduct ? deletedProduct : null;
}

// deleteById(
//     'cf050c0e-3bac-4a51-9557-58e4b7fe3359');

module.exports = {
    updateById, create, getById, getAll, deleteById
}
