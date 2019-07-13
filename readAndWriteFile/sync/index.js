const fs = require('fs');
//read from file
let message = fs.readFileSync(__dirname+'/../read.txt', 'utf8');
console.log(message);


const today = new Date();
const date = `${today.getDate()}.${(today.getMonth()+1)}.${today.getFullYear()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `Current time: ${date} ${time}`;

//write into file
fs.writeFileSync(__dirname+'/../write.txt', dateTime);