console.log("This is the tutorial for fetch api");

// Using fetch api in place of creating xhr objects
// let url = "/ajax.txt";
// function getData() {
//     console.log("Entering the getData");
//     fetch(url).then((response)=>{
//         console.log("Entering the first then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Entering the second then");
//         console.log(data);
//         console.log("Exiting the second then");
//     });
//     console.log("Exiting the getData");
// }

// console.log("Before the getData");
// getData();
// console.log("After the getData");


// Using an actual get request from web
let url = "https://api.github.com/users";
function getData() {
    fetch(url).then((response) => {
        // return response.text();
        return response.json();
    }).then((data) => {
        console.log(data);
    });
}

// getData();


//// Now creating an post request from web
let data = [
    {
        first_name: 'John',
        last_name: 'Adams',
        job_title: 'Software Engineer'
    }
]

let url2 = "https://reqres.in/api/users";
const options = {
    method: "POST",
    body: JSON.stringify(data),
    header: {
        'Content-Type': 'application/json'
    }
}
function postData() {
    fetch(url2, options).then(response=>response.json()).then(datas=>console.log(datas));
}

postData();


