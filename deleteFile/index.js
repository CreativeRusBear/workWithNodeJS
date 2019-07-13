const fs = require('fs');

fs.unlink('delete.txt', err =>{
    if (err) console.error(err)
});