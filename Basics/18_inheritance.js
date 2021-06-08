console.log("This is tutorial for inheritance");

// Creating a prototype manually

// Creating the template of the prototype
const proto = {
    slogan: function () {
        return `This is the best tutorial.`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

// Creating the object with that prototype
let chintu = Object.create(proto);
console.log(chintu);

// Creating the properties of the object manually
chintu.name = "Subasish";
chintu.role = "Programmer";

// console.log(chintu);
// console.log(chintu.slogan());
// chintu.changeName("Vicky");
// console.log(chintu);


// Another way of creating the object
const chin2 = Object.create(proto, {
    name: {value: "Subasish Bhatta", writable:true},
    role: {value: "Programmer"}
});

// console.log(chin2);
// console.log(chin2.slogan());
// chin2.changeName("Vicky");
// console.log(chin2);


///////////////////////////////////////////////////////
//................... INHERITANCE ..................//
//////////////////////////////////////////////////////

// Creating a constructor template
function Employee(name, salary, exp) {
    this.name = name;
    this.salary = salary;
    this.exp = exp;
}

Employee.prototype.slogan = function () {
    console.log(`My company is best. Regards ${this.name}`);
}

let firstEmp = new Employee("Partha", 26521, 4.5);
console.log(firstEmp);
firstEmp.slogan()


// Inherit the Employee constructor in another constructor
function Programmer(name, salary, exp, lang) {
    Employee.call(name, salary, exp);
    this.lang = lang;
}

let secondObj = new Employee("Abhisekh", 82500, 5.5, "Ruby");
console.log(secondObj);
secondObj.slogan();

// // Inherit the prototype
// Programmer.prototype = Object.create(Employee.prototype)
// console.log(secondObj);

// // Manually set the constructor
// Programmer.prototype.constructor = Programmer;
// console.log(secondObj);

