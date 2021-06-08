console.log("This is object tutorial");


// This is an object literal
let obj = {
    name: "subasish",
    lang: "python",
    id: 4,
    read: function () {
        console.log("This is a object");
    }
}

console.log(obj);
console.log(obj.name);
console.log(obj.lang);
console.log(obj.id);
obj.read();


// Creating an object using a constructor
function Car(givenName, givenSpeed) {
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function () {
        console.log(this.name + " is running");
    }
    this.analyze = function () {
        console.log(`${this.name} is slower than mercedes by ${200 - this.speed} KmpH`);
    }
}

// Initialising objects using function constructor
let car1 = new Car("Nissan", 80);
let car2 = new Car("Maruti", 60);
let car3 = new Car("Mercedes", 200);

// Constructor properties
console.log(car1.name + ", "+car1.speed);
console.log(car2.name + ", "+car2.speed);
console.log(car3.name + ", "+car3.speed);

// Constructor Methods
car1.run();
car2.run();
car3.run();

car1.analyze();
car2.analyze();
car3.analyze();
