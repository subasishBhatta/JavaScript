console.log("This is the tutorial for destructuring");

// let a, b;
// [a, b] = [54, "Hii"];
// console.log(a, b);


// const [a, b, c, d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(a, b, c, d);

// In this type of destructuring all the remaing numbers makes an array and assigned to d
// const [a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(a, b, c, d);

// Destructuring in objects
// const {a, b, c} = {a: 45, b: "string", c: function () {}, d: {}, e: 78, f: true};
// const {a, b, c, ...d} = {a: 45, b: "string", c: function () {console.log("Hii")}, d: {}, e: 78, f: true};

// console.log(a, b, c, d);
// c();

// Destructuring in arrays
let fruits = ["Apple", "Banana", "Grape", "Pomegranate"];
const [a, b, c, d] = fruits;
console.log(a, b, c, d);

// Similar destructuring in Objects

let person = {
    names: "Stephan Amell",
    Job: "Vigilante",
    Age: 45, 
    height: 6.2,
    Net: "6B",
    Boat: "Queen's Gambit", 
    "Girl Friend": "Felicity Smoak",
    Sister: "Thea Queen",
    getArrow: function () {
        console.log("The arrow is Oliver Queen");
    }
}

// let {names, Job, ...Age} = person;
let {names, Job, Age, height, Net, Boat, Sister, getArrow} = person;
console.log(names, Job, Age)
getArrow();

// console.log(person["Girl Friend"]);
// person.getArrow();
