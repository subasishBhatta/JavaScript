console.log("This is tutorial - 10");

function change(number) {
    return Math.floor(Math.random() * (number+1));
}

// This is how we add events in the javascript
// There are a lot of different types events present in javascript

// document.getElementById("head").addEventListener("mouseover", function (e) {
document.getElementById("head").addEventListener("click", function (e) {
    console.log("This is heading");
    let variable = e.target;        // This will give the element where event is fired
    // variable = e.target.className;
    // variable = e.target.id;
    // variable = e.target.classList;
    // variable = Array.from(e.target.classList);
    // variable = e.offsetX;
    // variable = e.offsetY;
    // variable = e.clientX;
    // variable = e.clientY;
    // console.log(variable);
    location.href = "//www.codewithharry.com";
    // let rancol = 'rgb(' + change(255) + ', ' + change(255) + ', ' + change(255) + ')';
    // variable.style.color = rancol;
    
})
