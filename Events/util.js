const events = require('events'),
      util = require('util');

class Car {
    constructor (model){
        this.model=model;
    }
}

util.inherits(Car, events.EventEmitter);

let Ford = new Car('Ford Mustang'),
    Mitsubishi = new Car('Mitsubishi GTO'),
    Toyota = new Car('Toyota AE86');

const cars = [Ford, Mitsubishi, Toyota];

cars.forEach(item=>{
   item.on('speed', (speed)=>console.log(`${item.model} speed is ${speed} km/h`));
});

Ford.emit('speed', 280);
Mitsubishi.emit('speed', 230);
Toyota.emit('speed', 180);