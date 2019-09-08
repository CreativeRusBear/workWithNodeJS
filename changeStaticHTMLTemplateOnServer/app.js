const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err){
      res.statusCode = 404;
      res.end('File not found');
    } else {
      res.setHeader("Content-Type", "text/html");
      const header = 'Node.js';
      const message ='Learn Node.js';
      data = data.replace('{header}', header).replace('{message}', message);
      res.end(data);
    }
  });
}).listen(8000);