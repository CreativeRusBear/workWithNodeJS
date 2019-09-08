const fs = require('fs');

const readableStream = fs.createReadStream('test.txt', 'utf8');
const writeableStream = fs.createWriteStream('test2.txt');

readableStream.pipe(writeableStream);