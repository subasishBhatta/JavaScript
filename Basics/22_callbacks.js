console.log("This is the tutorial on callbacks");

let Students = [
    { name: "Subasish Bhatta", lang: "JavaScript" },
    { name: "Chitta Hota", lang: "Python" }
];

function enrollStudent(student, callback) {
    setTimeout(() => {
        Students.push(student);
        console.log("Student is pushed into students");
        callback();
    }, 5000);
}

function getStudents() {
    setTimeout(() => {
        let str = "";
        Students.forEach((element)=>{
            str += `<li><strong>Name: ${element.name}, Language: ${element.lang}</strong></li>`
        })
        document.getElementById("stud").innerHTML = str;
        console.log("Students have been fetched");
    }, 2000);
}

let new_student = {name: "Partha", lang: "CAD"};
enrollStudent(new_student, getStudents);
// getStudents();
