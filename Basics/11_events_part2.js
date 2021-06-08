console.log("This is tutorial - 11");

// console.log(document.getElementById("btn"));
let btn = document.getElementById("btn");
// It will work for single click
// btn.addEventListener("click", fun1);

// It will work when we double click the button
// btn.addEventListener("dblclick", fun2);

// Here mouse wheel and right click works
// btn.addEventListener("mousedown", fun3);



// function fun1(e) {
//     console.log("You clicked submit", e);
//     e.preventDefault();         // It will prevent the default behaviour
// }
// function fun2(e) {
//     console.log("You double clicked submit", e);
//     e.preventDefault();         
// }
// function fun3(e) {
//     console.log("This is a mouse down event", e);
//     e.preventDefault();         
// }


// MOUSEENTER and MOUSELEAVE events
btn = document.querySelector(".no");
// btn.addEventListener("mouseenter", fun4);
// btn.addEventListener("mouseleave", fun5);

// function fun4(e) {
//     console.log("This is a mouse enter event", e);
// }
// function fun5(e) {
//     console.log("This is a mouse leave event", e);
// }


// This is a mousemove event
btn = document.querySelector(".container");
btn.addEventListener("mousemove", func);

function func(e) {
    console.log("This is a mouse move event");
    // console.log(e.target);
    // console.log(e.offsetX, e.offsetY);
    let col = `rgb(${(e.offsetX)%255}, ${(e.offsetY)%255}, ${((e.offsetX) + (e.offsetX))%255})`;
    btn.style.backgroundColor = col;
}

