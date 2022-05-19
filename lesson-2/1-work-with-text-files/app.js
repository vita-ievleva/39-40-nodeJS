// operations with txt file

// TODO:
// READ: читати файл
// Append дописувати в файл
// Write писати в файл
// unlink видаляти файл

// синхронно та асинхронно

// const fs = require('fs');
// const path = require('path');

/*  Sync API  */
// const data = fs.readFileSync('./files/file.txt', 'utf8');
// console.log(data);


/* Async API with promises */
const fs = require('fs');
const path = require('path');

const invoke = async (action, pathToFile, text) => {
    switch (action) {
        case 'read':
            const data = await fs.promises.readFile(pathToFile, 'utf8');
            console.log('read\n', data);
            break;
        case 'add':
            await fs.promises.appendFile(pathToFile, text);
            break;
        case 'rewrite':
            await fs.promises.writeFile(pathToFile, text);
            break;
        case 'delete':
            await fs.promises.unlink(pathToFile);
            break
        default:
            console.log('I do not know')
    }
}
const filePath = path.join(__dirname, 'files', 'file2.txt');
console.log('filePath', filePath);

// invoke('read', filePath);
// invoke('add', filePath, 'Hello Go');
// invoke('rewrite', filePath, 'Hello GoIt');
// invoke('delete', filePath);



/* Async API callBack */
// fs.readFile(filePath, 'utf8', (err, res) => {
//     if(err) {
//         console.log('ERROR', err)
//         return
//     }
//     console.log(res);
// })
//
// const result =  async () => {
//     const result = await fs.promises.readFile(filePath, 'utf8');
//     console.log('result\n', result);
// }
// result();

