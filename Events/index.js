const events= require('events');
const MyEmit = new events.EventEmitter();

MyEmit.on('some_event', (text)=>console.log(text));

MyEmit.emit('some_event', `It's work`);