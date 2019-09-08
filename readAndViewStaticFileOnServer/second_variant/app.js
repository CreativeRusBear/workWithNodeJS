const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  console.log(`Запрошенный адрес ${req.url}`);
 fs.readFile(req.url.substr(1), 'utf8', (err, data) => {
   if (err){
     res.statusCode = 404;
     res.end('Page not found');
   } else {
     res.end(data);
   }
 });
}).listen(8000, ()=>{
  console.log('Listening on 8000 port');
});