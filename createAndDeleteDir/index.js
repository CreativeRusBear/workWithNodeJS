const fs = require ('fs');

//create directory
fs.mkdirSync('mkdir');

//delete directory
fs.rmdir('delPath', err => err ? console.error(err) : console.info('File has been deleted'));