const http = require('http');

let server = http.createServer((req, res) => {
    console.info(`URL current page: ${req.url}`);
    res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
    res.end('Hello world!');
});

server.listen(8000, '127.0.0.1',()=>{
    console.info(`Server running at: 
    http://localhost:8000
    http://127.0.0.1:8000`);
});