const events = require('events');

function ReadFile() {
  this.file="";
}

ReadFile.prototype = new events.EventEmitter();
ReadFile.prototype.readDataFromFile = function(path, callback){
  this.file = path;
  if (typeof callback === 'function')
    this.on('readData', callback);
  this._read();
};

ReadFile.prototype._read = function() {
  console.log('Loading...');
  const someData = 'Some text from file';
  console.log('File was read');
  this.emit('readData', someData)
};

module.exports = {
  Reader: ReadFile
};