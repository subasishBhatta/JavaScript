console.log("This is the tutorial for classes");

class Employee {
    constructor(name, salary, id, exp) {
        this.name = name;
        this.salary = salary;
        this.id = id;
        this.exp = exp;
    }

    getDetails (){
        return `The name of the employee is ${this.name}.His id is ${this.id} and his experience in the company is ${this.exp} year. Due to this exp he got Rs. ${this.salary} as salary.`
    }

    changeName(newName) {
        this.name = newName;
    }

    joiningYear() {
        return `The employee ${this.name} join the company on ${2021 - this.exp}.`
    }

    // This is the satatic method which doesn't use any argument of the class i.e. it doesn't use this keyword in the class.
    static add (a, b) {
        return a + b;
    }

};

// Creating an object using class Employee as a template
let chintu = new Employee("Subasish Bhatta", 12400, 55, 4);
// console.log(chintu);
// console.log(chintu.getDetails());
// console.log(Employee.add(5, 8));
// console.log(chintu.joiningYear());
// chintu.changeName("Suba");
// console.log(chintu.getDetails());



///////////////////////////////////////////
//.......INHERITANCE USING CLASS.........//
///////////////////////////////////////////

class Programmer extends Employee {
    constructor(name1, salary1, id1, exp1, lang) {
        super(name1, salary1, id1, exp1);
        this.lang = lang;
    }

    getLanguage() {
        if (this.lang == "python") {
            console.log(`The employee ${this.name} is a python master.`);
        }
        else{
            console.log(`The employee ${this.name} is a JavaScript master.`);
        }
    }

    static multiply(a, b) {
        return a * b;
    }
};

let vicky = new Programmer("Biswajit", 45000, 54, 6, "python");
let filu = new Programmer("Abhisekh", 84599, 101, 8, "nan");

console.log(vicky.getDetails());
console.log(filu.getDetails());

vicky.getLanguage();
filu.getLanguage();

console.log(Programmer.multiply(85, 89));
