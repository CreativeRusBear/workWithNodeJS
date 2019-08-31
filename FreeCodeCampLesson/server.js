// import http from 'http';
// import express from 'express';



/**
 * Using Express
 */
/*const server = express();
server.get('/', (request, response)=>{
  response.send({ message: 'Hello EXPRESS' });
});
server.get('/favicon.*', (request, response)=>{
  // response.sendFile();
});



server.listen(3000);*/

/**
 * Using http package
 */
/* const server = http.createServer();
server.on('request', (request, response) =>{
  console.log(`It's work`);
  response.write('Run server');
  response.end();
});

server.listen(3000);*/


/**
 * Livereload has been added (using pnodemon package)
 */
process.stdin.resume();
console.log('Hello world!');