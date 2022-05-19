/*
App не знає як і де зберігаються продукти, а використовує интерфейс взаємодії з данними
Абстрагуючусь від деталей реализації
1) Read all products
2) Get one product
3) Add new product
4) Update one product
5) Delete one product ?
*/

const operations = require('./products');

const invoke = async ({action, id, price, name}) => {
    switch (action) {
        case 'getAll':
            const data = await operations.getAll();
            console.log('getAll', data);
            break;
        case 'getById':
            const product = await operations.getById(id);
            console.log('getById', product);
            break;
        case 'create':
            await operations.create(price, name);
            break;
        case 'updateById':
            await operations.updateById(id, price, name);
            break;
        case 'delete':
            await operations.deleteById(id);
            break;
        default:
            console.log('I do not know')
    }
}

invoke({action: 'delete', id: '8263b539-c546-4a64-866d-97d58e42c585'})
//  invoke({action: 'getAll'})
//  invoke({action: 'getById', id: 'cf050c0e-3bac-4a51-9557-58e4b7fe3359'})
//
// invoke({
//     action: 'updateById',
//     id: 'cf050c0e-3bac-4a51-9557-58e4b7fe3359',
//     name: 'mango',
//     price: 4300,
// })

