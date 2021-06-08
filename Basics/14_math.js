console.log("This is math object tutorial");

// Math object
m = Math;
console.log(m);
z = Math.PI;            // Gives the value of pie number
z = Math.E;             // Gives the value of eulers no
z = Math.LOG10E;
z = Math.LN2;
z = Math.SQRT1_2;
z = Math.SQRT2;

// Round Number
z = Math.round(5.4);
z = Math.round(5.6);

// Ceil function (Always higher)
z = Math.ceil(5.1);
z = Math.ceil(5.8);
z = Math.ceil(-5.8);

// Floor function (Always lower value)
z = Math.floor(5.1);
z = Math.floor(5.8);
z = Math.floor(-5.8);

// Absolute value
z = Math.abs(-5.8);
z = Math.abs(5.8);
z = Math.abs(-6);
z = Math.abs(6);

// Max and Min function
z = Math.max(12, 345, -45, 2358, 22, 90);
z = Math.min(12, 345, -45, 2358, 22, 90);

// Random no gen function
z = Math.random()       // Generate random no between 0-1
// // Generating random number between 0-10
z = 10 * Math.random();
// // To create round no we can use round, ceil or floor function
z = Math.round(10 * Math.random());         // [0-10]
z = Math.ceil(10 * Math.random());          // [1-10]
z = Math.floor(10 * Math.random());         // [0-9]

// // To generate the random no between 10-100 i.e. in a range
z = 10 + (100-10) * Math.random();

// To calculate the square root of a number
z = Math.sqrt(62);
z = Math.sqrt(64);

// To calculate the power of a number
z = Math.pow(2, 5);
z = Math.pow(5, 4);

console.log(z);

