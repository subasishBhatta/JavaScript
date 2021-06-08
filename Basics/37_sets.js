console.log("This is the tutorial for sets");

// Sets in JavaScript

// Initialising a set
let mySet = new Set();

// Adding the values to the set
mySet.add("Chintu");
mySet.add("Vicky");
mySet.add("Filu");
mySet.add("Partha");
mySet.add("Chintu");

// console.log(mySet);

// To check the size of the set
// console.log(mySet.size);

// To check whether an item present in the set or not
// console.log(mySet.has("Filu"));
// console.log(mySet.has("Chita"));

// Initialising a set using constructor
let mySet2 = new Set([12, "Banana", 5678, function new_set() {}, {veg: "okra"}, 12]);
// console.log(mySet2);

// Clear an entire set
// mySet2.clear();
// console.log(mySet2);

//Delete an item from the set
// console.log("Before", mySet.has("Chintu"));
mySet.delete("Chintu");
// console.log("After", mySet.has("Chintu"));

// Iterating a set using for-of
for (const iterator of mySet2) {
    // console.log(iterator);
}

// Iterating using forEach
mySet.forEach((element)=> {
    // console.log(element);
})

// Converting the set into an array
let mySetArr = Array.from(mySet2);
console.log(mySetArr);
console.log(mySetArr[4]);
console.log(mySetArr[4].veg);
