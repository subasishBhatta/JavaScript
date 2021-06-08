console.log("This is tutorial - 09");

// This is the process we can create an element and add text to it
let element = document.createElement("li");

element.className = "there";
element.id = "lid";
element.setAttribute("title", "mytitle");
// element.innerText = "This is the created text";
// element.innerHTML = "<strong>This is the created text</strong>";

// Now we want the element where we can insert this text
// let find = document.querySelector("ul.that");
// find.appendChild(element);
// console.log(find);

// Another way we can add text into the newly created element
let text = document.createTextNode("This is another created text");
element.appendChild(text);
let find = document.querySelector("ul.that");
find.appendChild(element);

// console.log(find);
// console.log(element);


//// This is the method we can replace an element with another element
let element2 = document.createElement("h3");
element2.className = "head3";
element2.id = "head3";
let tnode = document.createTextNode("This is a h3 heading");
element2.appendChild(tnode);

// Method of replacing
element.replaceWith(element2);

// Another way of replacing: Directly accesing the parent node
// find.replaceChild(element, document.getElementById("fli"));
let myul = document.getElementById("myul");
myul.replaceChild(element, document.getElementById("fli"));

// console.log(myul);


// Process of removing the child by accessing the parent node
myul.removeChild(document.getElementById("lli"));


// Accesing a particular attribute of an element
let pr = element2.getAttribute("class");
pr = element2.getAttribute("id");
pr = element2.hasAttribute("id")
element2.removeAttribute("class");
element2.setAttribute("title", "elem2title");

// console.log(pr);
// console.log(element2);


// Creating an anchor tag and a head element
let anchor = document.createElement("a");
anchor.setAttribute("href", "https://www.codewithharry.com");
anchor.className = "anchor";
anchor.id = "ancId";
anchor.innerHTML = "<h2>Go to Code With Harry</h2>";
anchor.style.color = "red";


// Accesing the node where we want to insert
let in_node = document.getElementById("noid");
in_node.append(anchor);

console.log(in_node);
console.log(anchor);
