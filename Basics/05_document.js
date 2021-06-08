console.log("This is tutorial 5");

// let a = document;
let a = document.all;
// a = document.head        // Provides all the head content
// a = document.body        // Provides all the body content

// Form document.all we get all the elements in the document like an array format
// But this is actially not an array so we cant apply foreach here

//Below foreach statement provides an error
// a.array.forEach(element => {
//     console.log(element);
// });

//But we can convert the document.all into an array
// Array.from(a).forEach(element=> {
//     console.log(element);
// });


// we can access each element by applying indexing on HTMLCollection
// console.log(a[21]);
// console.log(a.length);

// We can also get all the forms present in the HTML page
// a = document.forms

// console.log(a.length);
// console.log(a[0]);


// We can also have all the anchor tags present in the HTML page
// a = document.links

// console.log(a.length);
// console.log(a[0]);
// console.log(a[0].href);


// We can also extracts all the images from a HTML page
// a = document.images

// console.log(a.length);
// console.log(a[0]);
// console.log(a[0].src);


// We can also extract the scripts present in a HTML page
// a = document.scripts

// console.log(a.length);
// console.log(a[0]);              // This was inserted by system
// console.log(a[1]);
// console.log(a[1].src);


console.log(a);
