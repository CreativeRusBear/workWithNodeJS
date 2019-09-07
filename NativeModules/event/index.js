const fileReader = require('./fileReader');
const Reader = new fileReader.Reader();

Reader.readDataFromFile('file.js', response =>{
  console.log(response);
});