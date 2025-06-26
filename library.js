
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

function render() {
    let libraryEl = document.querySelector(".browse");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
        <div class="card">
            <div class="close-card">
                <button class="close-button">x</button>
            </div>
            <div class="card-header">
                <h3 class="title">${book.title}<h3>
                <h5 class="author">${book.author}<h5>
            </div>
            <div class="card-body">
                <p>${book.pages} pages</p>
                <p class="status">${book.status}<p>
            </div>
        </div>
        `;
        libraryEl.appendChild(bookEl);
    }
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let status = document.querySelector("#status").value;
    let addBook = new Book(title, author, pages, status);
    myLibrary.push(addBook);
    render();
}

let addBookbtn = document.querySelector("#add-book-btn");
let closeForm = document.querySelector(".close");
let addBookForm = document.querySelector("#add-book-form");
addBookbtn.addEventListener("click", function() {
    addBookForm.style.display = "flex";
    closeForm.style.display = "block";
})

closeForm.addEventListener("click", function() {
    addBookForm.style.display = "none";
    closeForm.style.display = "none";
})


document.querySelector("#add-book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})

// url(https://png.pngtree.com/background/20210711/original/pngtree-classical-ink-painting-bamboo-background-material-picture-image_1130331.jpg)
