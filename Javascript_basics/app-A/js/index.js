import { displayNoOfItemsInCart } from "./common.js";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  //update cart count
  displayNoOfItemsInCart();
}
