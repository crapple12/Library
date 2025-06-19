
myLibrary = [];

function Book (title, author, pages, status) {
	if (!new.target) {
		throw Error("You must use the 'new' operator to call the constructor");
	}
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = `${title} by ${author}, ${pages}, ${status}`;
  this.id = crypto.randomUUID();
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let status = document.querySelector("#status").value;
    let addBook = new Book(title, author, pages, status);
    console.log(addBook);
}

let addBookbtn = document.querySelector("#add-book-btn");
addBookbtn.addEventListener("click", function() {
    let addBookForm = document.querySelector("#add-book-form");
    addBookForm.style.display = "flex";
})

document.querySelector("#add-book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})

