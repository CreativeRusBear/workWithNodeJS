const fs = require('fs');

fs.unlinkSync('./some_dir/some-text.txt',err =>{
    if (err) console.error(err)
});

fs.rmdir('some_dir', err => {
    (err) ? console.error(err) : console.info('We delete some_dir path');
});