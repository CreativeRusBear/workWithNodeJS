const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log(`Запрошенный адрес: ${req.url}`);
  if (req.url.startsWith('/public/')){
    const filePath = req.url.substr(1);
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('File not found');
      } else {
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else {
    res.end('Move file into public directory');
  }
}).listen(8000, ()=>{
  console.log('Listen on 8000 port')
});