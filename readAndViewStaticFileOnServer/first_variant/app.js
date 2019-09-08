const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  console.log(`Запрошенный адрес ${req.url}`);
  const filePath = req.url.substr(1);
  fs.access(filePath, fs.constants.R_OK, err => {
    if (err){
      res.statusCode = 404;
      res.end('Page not found');
    }else{
      fs.createReadStream(filePath).pipe(res);
    }
  })
}).listen(8000, ()=>{
  console.log('Listening on 8000 port');
});