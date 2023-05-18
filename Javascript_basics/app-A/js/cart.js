import {
  alertBox,
  displayNoOfItemsInCart,
  getStoreCartItems,
  formatPrice,
  cartTotal,
} from "./common.js";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  //update cart count
  displayNoOfItemsInCart();

  //display cart items
  displayCartItems();

  //show cart total
  displayCartTotal();
}

//display cart items
function displayCartItems() {
  //get cart from store
  const cart = getStoreCartItems();
  // display product to UI
  displayCartItemsToUI(cart);
}

function displayCartItemsToUI(cart) {
  const cartBox = document.getElementsByTagName("tbody")[0];
  cartBox.innerHTML = "";
  cart &&
    cart.length > 0 &&
    cart.forEach((product) => {
      const cartItem = document.createElement("tr");
      cartItem.className = "cart-items";
      cartItem.innerHTML = `
  
      <td class="cart-items-title">
      <img 
        src=${product.imageUrl}
        alt="cart image"
        width="100px"
        height="100px"
      />
      <span class="cart-title">${product.title}</span>
    </td>
    <td class="cart-items-price">${product.price}</td>
    <td class="cart-items-qty-container">
      <input class="cart-items-qty" type="number" value=${product.qty} />
      <button class="btn cart-items-remove">REMOVE</button>
    </td>
        
        `;

      cartBox.appendChild(cartItem);
    });
}

function displayCartTotal() {
  document.getElementsByClassName(
    "cart-total"
  )[0].textContent = `Total: ${formatPrice(cartTotal())}`;
}
