//Store class
export class Store {
  static getBooks() {
    const books = localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : [];

    return books;
  }

  static saveBookToStore(data) {
    const books = Store.getBooks();

    //create a copy of the book
    const copy = [...books];
    //push the new book item
    copy.push(data);

    //update the store with the new record
    localStorage.setItem("books", JSON.stringify(copy));
  }
}
