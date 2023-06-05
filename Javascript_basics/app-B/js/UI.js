import { Store } from "./Store.js";
//UI class
export class UI {
  //ready state
  static ready() {
    //Events: submit form data
    const submitFormDataBtn = document.getElementsByClassName("btn-submit")[0];
    submitFormDataBtn.addEventListener("click", UI.submitFormDataHandler);
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
      UI.alertBox("All fields are required");
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

    //check if title or isbn already exist
    const titleExistError = UI.titleOrIsbnExist(title, isbn);
    //error handling
    if (titleExistError === "error") {
      UI.alertBox("Book with Title or isbn already exist");
      return;
    }

    //structure collected data into object
    const data = {
      id: author + "-" + isbn,
      title,
      author,
      isbn,
    };
    console.log(data, "book");

    //save book to store
    Store.saveBookToStore(data);

    //clear input field
    document.getElementsByClassName("input-title")[0].value = "";
    document.getElementsByClassName("author")[0].value = "";
    document.getElementsByClassName("isbn")[0].value = "";

    //alert success message
    UI.alertBox("Book created successfully", "success");
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
