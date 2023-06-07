import { Book } from "./Book.js";
import { Store } from "./Store.js";
//UI class
export class UI {
  //ready state
  static ready() {
    //display books once the dom is ready
    UI.displayBooks();
    //Events: submit form data
    const submitFormDataBtn = document.getElementsByClassName("btn-submit")[0];
    submitFormDataBtn.addEventListener("click", UI.submitFormDataHandler);

    //Events: delete book
    const deleteBookBtn = document.getElementsByClassName("btn-delete")[0];
    console.log(deleteBookBtn, "beleteBookBtn");
    deleteBookBtn &&
      deleteBookBtn.addEventListener("click", UI.deleteBookHandler);

    //Event: edit book
    const editBookBtn = document.getElementsByClassName("btn-edit")[0];
    editBookBtn && editBookBtn.addEventListener("click", UI.editBookHandler);

    //Event: cancel edit book
    const cancelEditBookBtn = document.getElementById("btn-edit-cancel");
    cancelEditBookBtn &&
      cancelEditBookBtn.addEventListener("click", UI.cancelEditBookHandler);

    //Event: Update Book
    const updateBookBtn = document.getElementById("btn-edit-submit");
    updateBookBtn &&
      updateBookBtn.addEventListener("click", UI.updateBookHandler);

    //Event : search
    const searchInput = document.getElementsByClassName("search")[0];
    searchInput.addEventListener("blur", UI.searchHandler);

    //Event: light mode
    const lightModeBtn = document.getElementsByClassName(
      "light-mode-container"
    )[0];

    //Event: light mode
    const lightModeMonnIcon = document.getElementsByClassName("fa-moon")[0];

    lightModeMonnIcon.addEventListener("click", UI.toggleLightMode);
    lightModeBtn.addEventListener("click", UI.toggleLightMode);
  }

  static toggleLightMode(e) {
    console.log("toggel");
    e.target.classList.toggle("light-mode-switch");
    const body = document.getElementsByTagName("body")[0];
    body.classList.toggle("lightModeEnabled");
  }

  static searchHandler(e) {
    const search = e.target.value;
    UI.displayBooks(search);
  }

  static updateBookHandler(e) {
    const title = document.getElementsByClassName("input-title")[0].value;
    const author = document.getElementsByClassName("author")[0].value;
    const isbn = document.getElementsByClassName("isbn")[0].value;

    //updateBook
    UI.updateBook(title, author, isbn);
  }

  static updateBook(title, author, isbn) {
    //get books from store
    const books = Store.getBooks();

    const copy = [...books];
    const index = copy.findIndex((book) => book.isbn == isbn);

    //foundBook
    const foundBook = copy[index];
    //update record
    foundBook.title = title ? title : foundBook.title;
    foundBook.author = author ? author : foundBook.author;

    localStorage.setItem("books", JSON.stringify(copy));

    UI.displayBooks();
    UI.alertBox("Update successfully", "success");
  }

  static cancelEditBookHandler(e) {
    e.preventDefault();
    //flip the submit button to update button
    document.getElementsByClassName("btn-submit")[0].classList.remove("hide");
    document
      .getElementsByClassName("btn-edit-actions")[0]
      .classList.remove("show");

    //cancelFormField
    UI.cancelFormField();
    document.getElementsByClassName("isbn")[0].disabled = "false";
  }

  static cancelFormField() {
    document.getElementsByClassName("input-title")[0].value = "";
    document.getElementsByClassName("author")[0].value = "";
    document.getElementsByClassName("isbn")[0].value = "";
  }

  static editBookHandler(e) {
    //flip the submit button to update button
    document.getElementsByClassName("btn-submit")[0].classList.add("hide");
    document
      .getElementsByClassName("btn-edit-actions")[0]
      .classList.add("show");

    //populate the form field to reflect the "to be edited table row fields"
    UI.transferTableRecordToFormField(e);
  }

  static transferTableRecordToFormField(e) {
    const tr = e.target.parentElement.parentElement;
    const title = tr.getElementsByClassName("book-title")[0].textContent;
    const author = tr.getElementsByClassName("book-author")[0].textContent;
    const isbn = tr.getElementsByClassName("book-isbn")[0].textContent;

    document.getElementsByClassName("input-title")[0].value = title;
    document.getElementsByClassName("author")[0].value = author;
    document.getElementsByClassName("isbn")[0].value = isbn;
    document.getElementsByClassName("isbn")[0].disabled = "true";
  }

  static deleteBookHandler(e) {
    console.log("delete");
    const grandParent = e.target.parentElement.parentElement;
    const isbn = grandParent.getElementsByClassName("book-isbn")[0].textContent;
    UI.removeBookWwithISBN(+isbn);
  }

  static removeBookWwithISBN(isbn) {
    //get books from store
    const books = Store.getBooks();

    const copy = books.slice();
    const filteredBooks = copy.filter((book) => book.isbn != isbn);

    //save update
    localStorage.setItem("books", JSON.stringify(filteredBooks));

    //display update
    // UI.displayBooks();
    location.reload();
  }

  static displayBooks(search = null) {
    //get books from store
    const books = Store.getBooks();
    let copy = [...books];

    if (search) {
      copy = copy.filter(
        (book) =>
          book.title.toLowerCase().startsWith(search.toLowerCase()) ||
          book.author.toLowerCase().startsWith(search.toLowerCase()) ||
          book.isbn == search
      );
    }
    const bookLists = document.getElementsByClassName("book-lists")[0];
    bookLists.innerHTML = "";
    copy.forEach((element) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
                <td class='book-title'>${element.title}</td>
                <td class='book-author'>${element.author}</td>
                <td class='book-isbn'>${element.isbn}</td>
                <td>
                   <span class="btn btn-actions btn-edit">EDIT</span>
                   <span class="btn btn-actions btn-delete">DELETE</span>
                </td>
          `;

      const deleteBookBtn = tr.getElementsByClassName("btn-delete")[0];
      deleteBookBtn.addEventListener("click", UI.deleteBookHandler);

      const editBookBtn = tr.getElementsByClassName("btn-edit")[0];
      editBookBtn.addEventListener("click", UI.editBookHandler);
      bookLists.appendChild(tr);
    });
  }

  static submitFormDataHandler(e) {
    //prevent form default submit behavior
    e.preventDefault();

    //collect form fields values
    const title = document.getElementsByClassName("input-title")[0].value;
    const author = document.getElementsByClassName("author")[0].value;
    const isbn = document.getElementsByClassName("isbn")[0].value;

    //perform validation to ensure all fields are supplied
    if (!title || !author || !isbn) {
      this.alertBox("All fields are required");
      return;
    }

    //check that isbn is number with exacty 6 digits
    const isDigitError = UI.isbnIsDigit(isbn);
    //error handling
    if (isDigitError === "error-number") {
      UI.alertBox("Please enter a valid number");
      return;
    } else if (isDigitError === "error-digit") {
      UI.alertBox("ISBN ust be exactly 6 digits");
      return;
    }

    // //check if title or isbn already exist
    // const titleExistError = UI.titleOrIsbnExist(title, isbn);
    // //error handling
    // if (titleExistError === "error") {
    //   UI.alertBox("Book with Title or isbn already exist");
    //   return;
    // }

    //structure collected data into object
    const id = author + "-" + isbn;
    const book = new Book(id, title, author, isbn);

    console.log(book, "book");

    //save book to store
    Store.saveBookToStore(book);

    //clear input field
    UI.cancelFormField();

    //alert success message
    UI.alertBox("Book created successfully", "success");

    //display updates
    UI.displayBooks();
  }

  static isbnIsDigit(isbn) {
    if (isNaN(+isbn)) {
      return "error-number";
    }

    if (isbn.toString().length !== 6) {
      return "error-digit";
    }
  }

  static titleOrIsbnExist(title, isbn) {
    //get all books from store
    const books = Store.getBooks();
    const foundBook = books.find(
      (book) =>
        book.title.toLowerCase() === title.toLowerCase() || book.isbn === isbn
    );

    if (foundBook) {
      return "error";
    }
  }

  static alertBox(message, msgClass) {
    const bgColor = msgClass == "success" ? "green" : "red";
    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.top = 0;
    div.style.right = 0;
    div.style.zIndex = 999;
    div.style.width = "200px";
    div.style.height = "80px";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = `${bgColor}`;
    div.style.color = "#fff";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.textContent = `${message}`;
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(div);

    //make the box disappear after 5sec
    setTimeout(() => {
      div.style.display = "none";
    }, 5000);
  }
}
