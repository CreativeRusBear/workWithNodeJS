import http from 'http';
import express from 'express';

/**
 * @summary Create server using Express
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
 * @summary Create server using http package
 */
/* const server = http.createServer();
server.on('request', (request, response) =>{
  console.log(`It's work`);
  response.write('Run server');
  response.end();
});
server.listen(3000);*/





/**
 * @summary Livereload has been added (using pnodemon package)
 */
/* process.stdin.resume();
console.log('Hello world!'); */





import { exec } from 'child_process';

/**
 * @summary Run OS Windows dir command
 */
/*exec('dir', (error, stdout, stderr) => {
  if (error) {
    process.exit(1);
  }
  console.log(stdout);
});*/





import util from 'util';

const execPromise = util.promisify(exec);
/**
 * @summary Run OS command and do exec function asynchronously
 * @returns {Promise<void>}
 */
const main = async () =>{
  try{
    const { stdout } = await execPromise('dir');
    console.log(stdout);
  }catch (e) {
    process.exit(1);
  }
};
// main();





/**
 * @summary Listening Events
 */
import EventEmitter from 'events';

const eventEmitter = new EventEmitter();
eventEmitter.on('change', ()=>{
  console.log('Something has changed');
});
setInterval(()=>{
  eventEmitter.emit('change');
}, 1000);
