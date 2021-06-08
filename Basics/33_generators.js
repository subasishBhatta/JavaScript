console.log("This is the tutorial for generators");

// Generators
// function* numbersGen() {

//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// let gen = numbersGen();
// console.log(gen.next());
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next());



// This function will go on since there is not any terminating conditions
function* numbersGen() {
    let i = 0;

    while (true) {
        yield i++; 
    }
}

let gen = numbersGen();
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
