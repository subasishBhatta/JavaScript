console.log("This is the tutorial on callbacks");

let Students = [
    { name: "Subasish Bhatta", lang: "JavaScript" },
    { name: "Chitta Hota", lang: "Python" }
];

const new_error = true;

function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            Students.push(student);
            console.log("Student is pushed into students");
            if (new_error) {
                resolve();
            }
            else{
                reject();
            }
        }, 5000);
    })
}

function getStudents() {
    setTimeout(() => {
        let str = "";
        Students.forEach((element) => {
            str += `<li><strong>Name: ${element.name}, Language: ${element.lang}</strong></li>`
        })
        document.getElementById("stud").innerHTML = str;
        console.log("Students have been fetched");
    }, 2000);
}

let new_student = { name: "Partha", lang: "CAD" };
// enrollStudent(new_student);
// getStudents();

// enrollStudent(new_student).then((result) => {
//     getStudents();
// }).catch((err) => {
//     console.log("Some error occured");
// });

enrollStudent(new_student).then(getStudents).catch((err) => {
    console.log("Some error occured");
});
