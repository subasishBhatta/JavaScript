console.log("Hello");

let name = "Chintu";
let greet = "Good Morning"

let greeting = name + " " + greet;
console.log(greeting);

let html_str = `<h1>Hii everyone</h1>
<p>This is a paragraph</p>`;

// console.log(html_str[0]);

html_str2 = html_str.toUpperCase();
// console.log(html_str2);

html_str3 = html_str.toLowerCase()
// console.log(html_str3);
//
// console.log(html_str.length);

// Used to concat the string
html_str2 = html_str2.concat("This is new");
// console.log(html_str2);

// console.log(html_str.indexOf("<"));
// console.log(html_str.lastIndexOf("<"));
// console.log(html_str.charAt(6));
// console.log(html_str.endsWith("graph"))
// console.log(html_str.endsWith("graph</p>"))
// console.log(html_str3.includes("is"));
// console.log(html_str3.includes("ix"));
// console.log(html_str.substr(0, 5));
// console.log(html_str.substring(1, 5));
// console.log(html_str.substring(-1));
// console.log(html_str.slice(1, 8));
// console.log(html_str.slice(-18));
//
// console.log(html_str.split(" "));
// console.log(html_str.split(">"));

let fruit1 = "Orange";
let fruit2 = "Apple";

let new_html = `<h1>My name is ${name}</h1>
<p>This is my way of showing ${greet}</p>
<h2>I like ${fruit1} and ${fruit2} very much</h2>`;

document.body.innerHTML = new_html;

