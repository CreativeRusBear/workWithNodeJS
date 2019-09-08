const fs = require('fs');
const zlib = require('zlib');

const readableStream = fs.createReadStream('test.txt', 'utf8');
const writeableStream = fs.createWriteStream('test.txt.gz');

const gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writeableStream);