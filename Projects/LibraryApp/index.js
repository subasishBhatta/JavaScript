console.log("This is my library project");


class Library {

    constructor(bookName, bookAuthor, bookType, bookTime) {
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookType = bookType;
        this.bookTime = bookTime;
    }
}

// Display class
class Display {
    add(book) {
        let text = document.getElementById("tableBody");
        let count = text.childElementCount;
        let html = `<tr>
                        <td>${book.bookName}</td>
                        <td>${book.bookAuthor}</td>
                        <td>${book.bookType}</td>
                        <td>${book.bookTime}</td>
                        <td><button id="${count}" onclick="deleteNote(this.id)" class="btn btn-danger btn-sm">Delete</button></td>
                    </tr>`;
        text.innerHTML += html;
    }
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    validation(book) {
        if (book.bookName.length < 3 || book.bookAuthor.length < 3) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let alertMessage = document.getElementById("message");
        let mainText;
        if (type == "success") {
            mainText = "Success";
        }
        else {
            mainText = "Danger";
        }
        let html = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${mainText}: </strong> ${displayMessage} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
        alertMessage.innerHTML = html;
        setTimeout(() => {
            alertMessage.innerHTML = ""
        }, 3000);
    }
};

// Adding Data to the Local Storage
function storage(book) {
    let notes = localStorage.getItem("note")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(book);
    localStorage.setItem("note", JSON.stringify(notesObj));
}

// Show notes each time page reloads
function showBooks() {
    let notes = localStorage.getItem("note")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let text2 = document.getElementById("tableBody");
    text2.innerHTML = "";
    let html = "";
    notesObj.forEach(function (element, index) {
        html = `<tr>
                        <td>${element.bookName}</td>
                        <td>${element.bookAuthor}</td>
                        <td>${element.bookType}</td>
                        <td>${element.bookTime}</td>
                        <td><button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger btn-sm">Delete</button></td>
                </tr>`;
        text2.innerHTML += html;
    });
}

// Delete Button
function deleteNote(index) {
    let notes = localStorage.getItem("note");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("note", JSON.stringify(notesObj));
    showBooks();
}

showBooks();
// EVent Listners
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", librayFormFunc);

function librayFormFunc(e) {
    console.log("Submit button used");
    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;
    let time_now = new Date();
    let book_time = `${time_now.getDate()}/${time_now.getMonth()}/${time_now.getFullYear()}  ${time_now.getHours()}:${time_now.getMinutes()}`;

    let type;
    let fiction = document.getElementById("fiction");
    let fantasy = document.getElementById("fantasy");
    let thriller = document.getElementById("thriller");
    let programming = document.getElementById("programming");

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (fantasy.checked) {
        type = fantasy.value;
    }
    else if (thriller.checked) {
        type = thriller.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    // console.log(bookName, authorName, type);
    let book = new Library(bookName, authorName, type, book_time);
    // console.log(book);
    let display = new Display();

    if (display.validation(book)) {
        storage(book);
        display.add(book);
        display.clear();
        display.show("success", "Your book is validated successfully. You can take the book.");

    }
    else {
        display.show("danger", "There is something wrong, may be book name or author name is to short");
        display.clear();
    }


    e.preventDefault();
}
