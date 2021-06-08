console.log("This is the tutorial for maps");

// Maps in JavaScript
const myMap = new Map();

// Creating the keys for the map
const key1 = "mystring", key2 = {name: "fruitArray"}, key3 = function () {};

// Setting the keys and values to the map
myMap.set(key1, "This is a string");
myMap.set(key2, ["Banana", "Apple"]);
myMap.set(key3, {veggies: "Okra"});

// console.log(myMap);

// Getting the values from the map
let value = myMap.get(key3);
// console.log(value);
// console.log(value.veggies);

// Getting the size of the map
// console.log(myMap.size);

// You can loop using a for-of loop
for (const [key, value] of myMap) {
    // console.log(key, value);
}

// You can get loop the keys 
for (const iterator of myMap.keys()) {
    // console.log(iterator);
}

// You can loop the values of the map 
for (const iterator of myMap.values()) {
    // console.log(iterator);
}

// You can loop the map using forEach loop
myMap.forEach((value, key)=> {
    // console.log(key, value);
})

// Converting a map to an array
let myArr = Array.from(myMap)
// console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr[0][0]);

// Converting the keys of the map to an array
let myKeyArr = Array.from(myMap.keys());
// console.log(myKeyArr);

// Converting the values of the map to an array
let myValueArr = Array.from(myMap.values());
console.log(myValueArr);
console.log(myValueArr[1]);
console.log(myValueArr[1][0]);
console.log(myValueArr[2]);
console.log(myValueArr[2].veggies);