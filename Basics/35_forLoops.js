console.log("This is the tutorial for for loop");

// Creating three different types of iterables

let myVeggies = ["Tomato", "Potato", "Okra", "Pumpkin", "Sweet potato", "Brinjal"];

let myStr = "Subasish B";

let myObj = {
    Name: "Subasish Bhatta",
    Age: "28",
    Language: "JavaScript",
    FrameWork: "React",
    Email: "sbhatta143@gmail.com",
    Nationality: "Indian"
};

// 1. --------------Traditional for loop----------------------

// For the array
for (let index = 0; index < myVeggies.length; index++) {
    const element = myVeggies[index];
    // console.log(element);
}

// For the string
for (let index = 0; index < myStr.length; index++) {
    const element = myStr[index];
    // console.log(element);
}

// For the Object
// console.log(Object.keys(myObj))
for (let index = 0; index < Object.keys(myObj).length; index++) {
    const element = myObj[Object.keys(myObj)[index]];
    // console.log(element);
}




// 2. --------------for each loop----------------------

// For the array
myVeggies.forEach((element, index) => {
    // console.log(index, element);
});

// For the string - We can not apply forEach loop either with the string or with the Objects, basically it is a method for the arrays only
// In order to apply the forEach loop with strings we need to convert the string into an array

Array.from(myStr).forEach(element => {
    // console.log(element);
});




// 3. --------------for in loop----------------------

// For the arrays   -    Can be applied but not advisable
for (const key in myVeggies) {
    // console.log(key, myVeggies[key]);
}

// For the Strings  -   Can be applied but not advisable
for (const key in myStr) {
    // console.log(myStr[key]);
}

// For the Objects  -   For in should be always applied with Objects
for (const key in myObj) {
    // if (Object.hasOwnProperty.call(myObj, key)) {
    //     const element = myObj[key];
    //     console.log(element);
    // }
    // console.log(key + ": " + myObj[key])
}



// 4. --------------for of loop----------------------

// For the arrays   -   Should be applied with arrays
for (const iterator of myVeggies) {
    // console.log(iterator);
    // console.log(iterator, myVeggies.indexOf(iterator));
}

// For the strings  -   Should be used with strings
for (const iterator of myStr) {
    // console.log(iterator);
}

// For the Objects  -   can't be used

