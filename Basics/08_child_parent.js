console.log("This is tutorial - 8");

let con = document.querySelector(".no");    // Gives the first con class
con = document.querySelector(".container");
let nodeName = con.nodeName;
let nodeType = con.nodeType;

// console.log(con);
// console.log(nodeName);
// console.log(nodeType);

/*
Different node types
1. Element
2. Attribute
3. Text node
8. Comment
9. Document 
10. Doctype
*/ 

// console.log(con);
// This will give all the node including empty texts and elements 
console.log(con.childNodes);
// But this will only give all the elements
// console.log(con.childNodes[0].nextSibling);
// console.log(con.childNodes[0].nextElementSibling);

// console.log(con.children[0]);
// console.log(con.children[0].nextSibling);   // This will give the next sibling node
// console.log(con.children[0].nextElementSibling);    // But this will give the next sibling element
// console.log(con.children[0].nextElementSibling.nextElementSibling);    // Give next to next sibling element


console.log(con.children);
let new_child = con.children[1];

// This is the branching of the children
// console.log(new_child);
// console.log(new_child.children);
// console.log(new_child.children[0].innerHTML);
// console.log(new_child.children[0].innerText);


// Use of first and last child;
// console.log(con.firstChild);         // First child node
// console.log(con.firstElementChild);  // First child element

// console.log(con.lastChild);         // last child node
// console.log(con.lastElementChild);  // last child element

console.log(con.childElementCount);

console.log(con.firstElementChild.parentNode);
console.log(con.firstElementChild.nextSibling);
console.log(con.firstElementChild.nextElementSibling);
console.log(con.firstElementChild.nextElementSibling.children);
console.log(con.firstElementChild.nextElementSibling.children[0]);
console.log(con.firstElementChild.nextElementSibling.children[0].innerHTML);
console.log(con.firstElementChild.nextElementSibling.children[0].innerText);

