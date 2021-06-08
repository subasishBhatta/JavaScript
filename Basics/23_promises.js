console.log("This is the tutorial for promises");


let errors = false;

function fun() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (!errors) {
                console.log("Fun: Your promise is resolved");
                resolve();
            }
            else {
                console.log("Fun: Your promise is rejected");
                reject("Sorry, there is something wrong!");
            }
        }, 2000);
    })
};

fun().then(() => {
    console.log("Me: Issue is resolved");
}).catch((err) => {
    console.log("Me: Promise is broken." + err);
});
