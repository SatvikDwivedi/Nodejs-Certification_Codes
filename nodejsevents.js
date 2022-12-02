const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(() => {
    console.log('Please turn off the motor! Its a gentle reminder...');
  }, 3000);
});

console.log("the script is running")
myEmitter.emit('waterFull');
console.log("the script is still running")