console.log("This is tutorial for async/await");

// Function using async

url = "https://api.github.com/users"
async function fun() {
    console.log("Inside fun");
    console.log("Before fetch await");
    const response = await fetch(url);
    console.log("Before response await");
    const users = await response.json();
    console.log("After response await");

    return users;
}
console.log("Before calling fun()");
let a = fun();
console.log("After calling fun()");
console.log(a);
a.then(data=> console.log(data));
console.log("End of pgm");
