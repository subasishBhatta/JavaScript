console.log("This is tutorial - 13");

/*
****** THIS IS THE QUESTION ******
- You have to create a div and inject it into the page which contains a heading.
- whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.
- When someone click the clear button then it should clear the content of the div element completely from the local storage and also from the div element.
*/


// Creating the element
let divElem = document.createElement("div");
let button = document.createElement("button");

// Creating the text node to add inside the divElem
let texts = localStorage.getItem("text");
let text;
if (texts == null) {
    text = document.createTextNode("Tap to edit it");
}
else
{
    text = document.createTextNode(texts);
}
divElem.append(text);

// Creating text node to add inside the button
let text_b = document.createTextNode("Clear");
button.append(text_b);

// Adding attributes to the divElem
divElem.id = "elems";
divElem.setAttribute("class", "cl_elem");
divElem.setAttribute("style", "border: 2px solid black; border-radius: 5px; width: 300px; padding: 3px");

// Adding attributes to the button
button.id = "btn";

// Getting the parent node and the reference node to add the divElem
let parentNode = document.querySelector(".container");
let referenceNode = document.getElementById("myul");


// Adding the divElem and button to the container
parentNode.insertBefore(divElem, referenceNode);
parentNode.insertBefore(button, referenceNode);

// Adding the event Listners to the divElem
divElem.addEventListener("click", function(element) {
    // console.log(element.target.innerHTML);
    let noTextArea = document.getElementsByClassName("textarea").length;
    if (noTextArea == 0) {
        let html = element.target.innerHTML;
        divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" row="5" style="width: 290px; padding: 1px">${html}</textarea>`;
        
    }
    let textArea = document.getElementById("textarea");
    // console.log(textArea);
    textArea.addEventListener("blur", function (e) {
        // console.log(elems);
        // console.log(textArea.value);
        elems.innerHTML = textArea.value;
        localStorage.setItem("text", textArea.value);
        // textArea.style.border = "none";
    })
})

// Adding the event listners to the button
button.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
})



// console.log(divElem, text, parentNode, referenceNode);
// console.log(divElem.innerHTML);
// console.log(document.getElementsByClassName("textarea").length);
