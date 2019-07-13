const fs = require('fs');

fs.readFile(__dirname+'/../read.txt', 'utf8', (err, res)=>{
    try{
        console.info(res);
    }catch{
        console.error(err);
    }
});

fs.writeFile(__dirname+'/../async_write.txt', 'Write text using async function', (err, res)=>{
    try{
        console.info('Write text into file is done');
    }catch {
        console.error(err)
    }
});

console.log("Text after using method");