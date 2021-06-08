console.log("This is the solution of exercise-2");

// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)



class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(function (element, index){
            console.log(`${index+1}: ${element}`);
        });
    }

    issueBook(bookName, user) {
        if (this.issuedBooks[bookName] == undefined) {
            this.issuedBooks[bookName] = user;
        }
        else {
            console.log(`${bookName} book is already issued to ${this.issuedBooks[bookName]}`);
        }
    }

    returnBook(bookName) {
        delete this.issuedBooks[bookName];
        console.log(`The book ${bookName} is free to issued to the new user.`);
    }
};

books = ["Physics", "Chemistry", "MIL", "English", "Mathematics", "Botany", "Zoology"];
let AJO = new Library(books);
console.log(AJO);
console.log(AJO.getBookList());

console.log(AJO.issueBook("Physics", "Chintu"));
console.log(AJO.issueBook("Physics", "Vicky"));

console.log(AJO.returnBook("Physics"));
