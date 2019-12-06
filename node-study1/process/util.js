var util = require('util');

class Base {
    constructor() {
        this.name = 'base';
        this.base = 1992;
        this.sayHello = function () {
            console.log('hello ' + this.name);
        }
    }

    showName() {
        console.log(`Hello ${this.name}`);
    }
}

function Sub() {
    this.name = 'sub';
}

// util.inherits(Sub, Base);
// let sub = new Sub();
// console.log(sub.sayHello);
// console.log(sub);
// console.log(util.inspect(sub))