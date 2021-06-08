console.log("This is tutorial for arrow function");

// Regular function
// function greet() {
//     return `Good Morning`;
// }

// let greet1 = function () {
//     return `Good Evening`;
// }


// Using arrow function
let greet = ()=>{
    return `Good Morning`;
}

// Since it has only one statement so we dont need any braces and return statement
let greet1 = () => "Good Afternoon";

// If there is only one argument then we dont need any bracket
let greet2 = name => `Good afternoon ${name}`; 

// But if there is two arguments then we must need bracket
let greet3 = (name1, name2) => "Good evening " + name1 + " & " + name2;

console.log(greet());
console.log(greet1());
console.log(greet2("Chintu"));
console.log(greet3("Chintu", "Chitta"));
