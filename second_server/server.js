const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('./src/index.html').toString();
const css = fs.readFileSync('./src/css/app.css').toString();
const js = fs.readFileSync('./src/js/app.js').toString();

http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/' :
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
            break;
        case '/css/app.css' :
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(css);
            break;
        case '/js/app.js' :
            res.writeHead(200, {'Content-Type': 'text/js'});
            res.end(js);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text-plain'});
            res.end('404 Not found');

    }
}).listen(3000, () => console.log('Run server on http://localhost:3000'));