console.log("This is exercise - 1");

let a = Array.from(document.links);

a.forEach(element => {
    // console.log(element.href);
    if (element.href.includes("youtube")) {
        console.log(element.href);
        console.log(typeof element.href);
    }
});

// console.log(a);

