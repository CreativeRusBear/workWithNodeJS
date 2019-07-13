const fs = require('fs');

fs.mkdir('some_dir', err => {
   if (!err){fs.writeFile('./some_dir/some-text.txt', 'This is example', error=>{
           (error) ?  console.error(error) : console.info('We doing it');
       });
   }else {
       console.error(err);
   }
});