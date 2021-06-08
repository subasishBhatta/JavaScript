console.log("This is the tutorial about element selector");

/*
There are two types of element selectors in javascript
1. Single element selector
2. Multiple element selector
*/


// This is the way of selecting the single elements from the HTML page
 
let ele = document.getElementById("second");
// let ele = document.getElementById("head");
// ele = ele.innerText;
// ele.innerText = "My name is Subasish Bhatta";
// ele = ele.innerHTML;
// ele = "<h2>Hii evereyone</h2>";
// console.log(elem);
// ele = ele.childNodes;
ele.style.color = "red";
ele.innerText = "My second box";
ele.innerHTML = "<b>Hii Second Box</b>";
// console.log(ele.innerHTML);

let elem = document.querySelector("#first");
// elem = elem.innerText
elem = document.querySelector(".box");      // There are a lot of classes with the same name but it only return the first class with the same name

elem = document.querySelector("div")        // Similarly we can pass different tags to it and each each time it will return the first occurance of that tag

elem.style.color = "green";

// console.log(elem);



// Multi element Selector
let sel = document.getElementsByClassName("box");
sel = document.getElementsByClassName("container");

// console.log(sel[0].getElementsByClassName("box"));
sel = document.getElementsByTagName("div")


///// This is the way we can use forEach loop
// Array.from(sel).forEach(element => {
//     console.log(element);
//     element.style.color = "orange";
// });



///// This is the way we can use for loop
for (let index = 0; index <sel.length; index++) {
    const element =sel[index];
    console.log(element);
    element.style.color = "indigo";
}

console.log(sel);
