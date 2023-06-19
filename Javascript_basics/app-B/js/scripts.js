<<<<<<< HEAD
=======
//object oriented programing approach to building project
//group project into class module - Book class, Store class, UI class and Events
import { Book } from "./Book.js";
import { Store } from "./Store.js";
import { UI } from "./UI.js";

//Events: document ready
//Event : submit form data
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", UI.ready);
} else {
  UI.ready();
}
>>>>>>> 3f73feb3c1f32c82f8a0da427f9e66e95d2059ea
