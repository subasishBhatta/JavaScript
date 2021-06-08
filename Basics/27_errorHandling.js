console.log("This is tutorial for error handling");

let name = "Subasish Bhatta";
a = undefined;

// This is how we can throw an error
if (a != undefined) {
    throw new Error("This is outrageous");
}
else
{
    console.log("This is a joke");
}

//try, catch and finally

try {
    let a = 123;
    let b = 0;
    console.log(`The division of ${a} and ${b} is ${a/b}`);
    // a*bFGHjknl
} catch (error) {
    console.log("This is an error");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally {
    console.log("EXECUTED WHATEVER MAY BE THE CONDITION");
}