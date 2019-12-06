var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('test', function () {
    console.log('test test test')
});

setTimeout(() => {
    eventEmitter.emit('test');
},3000);