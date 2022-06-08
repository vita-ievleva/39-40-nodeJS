const bcrypt = require('bcryptjs');


const userPassword = 'qwerty1234';
// hash amd salt
// 1. async
// 2. sync

const hashed = bcrypt.hashSync(userPassword, 10);
// const hashed2 = bcrypt.hashSync(userPassword, 6);

console.log('hashed ', hashed)
// console.log('hashed2', hashed2)

// verify
const res = bcrypt.compareSync('hfghdgfdgfd', hashed);
console.log('result', res);

