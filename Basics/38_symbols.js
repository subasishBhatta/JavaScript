console.log("This is the tutorial for Javascript Symbols");


// Symbols in JavaScript
// Symbol - It is used to produce unique primitive each time

const k1 = Symbol();
const k2 = Symbol();

// It is not like any other data type it is unique in its own
console.log(k1, k2);
console.log(typeof k2);
console.log(k1 === k2);

// We have the same identifier in each symbol still it is different
// It is generally used to produce unique keys
const k3 = Symbol("chintu");
const k4 = Symbol("chintu");
console.log(k3 === k4);
console.log("hi" === "hi");
console.log(undefined === undefined);
console.log(null === null)

let myObj = {};
let key1 = Symbol("This is key1");
let key2 = Symbol("This is key2");

myObj[key1] = "Subasish";
myObj[key2] = "Chitta";
myObj["names"] = "Vicky";
myObj[34] = "Number";

console.log(myObj);
console.log(myObj[key1]);
// console.log(myObj.key2);     // We can not access the keys of the object if it is a symbol
console.log(myObj[key2])
console.log(myObj[34])
console.log(myObj.names)        // Since it is a string it can be accessed like that


// This will ignore all the symbol keys in the object
console.log(JSON.stringify(myObj));

// Similarly if we use for-in loop then it will also ignore the symbol keys
for (const key in myObj) {
    console.log(myObj[key]);
    console.log(key);

}
