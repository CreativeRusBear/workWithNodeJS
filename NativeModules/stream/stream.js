const fs = require('fs');

const writeableStream = fs.createWriteStream('file.txt');
writeableStream.write('First string\n');
writeableStream.write('Second string\n');
writeableStream.end('Last string');

const readableStream = fs.createReadStream('file.txt', 'utf8');
readableStream.on('data', (chunk)=>{
  console.log(chunk);
});

