
console.log("index.js"); 
const container = document.getElementById("test");
class Car {
    manufacturer(car) {
        if (container) {
            container.innerHTML = `The best car is ${car}`;
        }
    }
}

const volvo = new Car;

volvo.manufacturer('volvo');

const fileA = require('./fileA')

const fileB = require('./fileB')