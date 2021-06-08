console.log("This is the Note taking app project");

showNote();
let btn = document.getElementById('addNote');
btn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addText');
    let notes = localStorage.getItem('note');
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }

    notesArr.push(addTxt.value);
    localStorage.setItem("note", JSON.stringify(notesArr));
    addTxt.value = "";
    // console.log(notesArr);
    showNote();

})

// This is the function to show all the notes in the local storage
function showNote() {
    let notes = localStorage.getItem('note');
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    let html = "";
    notesArr.forEach(function (element, index) {
        if (element.length > 200) {
            html += `<div id="textBox" class="textBox card my-2 mx-2">
                    <div class="card-body">
                        <h5 class="card-title">Note - ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick=deleteNote(this.id) class="btn btn-danger" style="background-color: #b71c1c;border-radius: 0.8rem;">Delete Note</button>
                    </div>
                </div>`;
        }
        // else if (element.length == 0) {
        //     location.reload();
        //     console.warning("Empty card");
        // }
        else {
                html += `<div id="textBox" class="textBox card my-2 mx-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note - ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick=deleteNote(this.id) class="btn btn-danger" style="background-color: #b71c1c;border-radius: 0.8rem;">Delete Note</button>
                    </div>
                </div>`;
            }

        });

    let notesElem = document.getElementById('notes');
    if (notesArr.length != 0) {
        notesElem.innerHTML = html;

    }
    else {

        notesElem.innerHTML = `<h3 class="text-danger">There is no notes to display</h3>`;
    }
}

// This is the function to delete a node
function deleteNote(index) {
    let notes = localStorage.getItem('note');
    if (notes == null) {
        noteArr = [];
    }
    else {
        noteArr = JSON.parse(notes);
    }
    notesArr.splice(index, 1);
    localStorage.setItem('note', JSON.stringify(notesArr));
    showNote();
}

// Add a download notes button


// Search Box ......................................

// let search = document.getElementById('searchText');
// search.addEventListener("input", function (e) {
//     let inputText = search.value.toLowerCase();
//     // console.log(inputText);
//     let noteCards = document.getElementsByClassName("textBox");
//     // console.log(noteCards);
//     Array.from(noteCards).forEach(function (element) {
//         let cardTexts = element.getElementsByTagName("p")[0].innerText;
//         // console.log(cardTexts);
//         let cardText = cardTexts.toLowerCase();
//         if (cardText.includes(inputText)) {
//             element.style.display = "block";
//         }
//         else
//         {
//             element.style.display = "none";
//         }
//     })
// })

let searchBarText = document.getElementById('searchText');
let search = document.getElementById('searchBtn');
searchBarText.addEventListener("input", function (e) {
    let inputText = searchBarText.value.toLowerCase();
    console.log(inputText);
    search.addEventListener("click", function (ele) {
        let noteCards = document.getElementsByClassName("textBox");
        // console.log(noteCards);
        Array.from(noteCards).forEach(function (element) {
            let cardTexts = element.getElementsByTagName("p")[0].innerText;
            // console.log(cardTexts);
            let cardText = cardTexts.toLowerCase();
            if (cardText.includes(inputText)) {
                element.style.display = "block";
            }
            else {
                element.style.display = "none";
            }
        })
    })

})



// Clear Page
let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function () {
    let notes = localStorage.getItem("note")
    if (notes == null) {
        alert("The page is already empty");
    }
    else {
        localStorage.clear();
        location.reload();
    }
})