// // Buffer - global object


const b1 = Buffer.alloc(3);
console.log(b1);

b1.fill('A');
console.log(b1);
console.log(b1.toString('utf-8'));

