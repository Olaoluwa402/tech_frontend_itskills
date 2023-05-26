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

  const deleteCartItemBtn = document.querySelectorAll(".cart-items-remove");
  deleteCartItemBtn.forEach((btn) => {
    btn.addEventListener("click", removeCartHandler);
  });

  const qtyInputBtn = document.querySelectorAll(".cart-items-qty");

  qtyInputBtn.forEach((btn) => {
    btn.addEventListener("change", incrementQtyHandler);
  });
}

function incrementQtyHandler(e) {
  const inputValue = e.target.value;
  const title =
    e.target.parentElement.parentElement.getElementsByClassName("cart-title")[0]
      .textContent;

  //check that value is not less than 1
  if (+inputValue < 1) {
    e.target.value = 1;
    return;
  }

  //get cart fro store and look for the item to be updated using it's title
  const cartItems = getStoreCartItems();

  const copy = [...cartItems];

  console.log(title, "title");
  //find the index of the item first
  const index = copy.findIndex(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );

  //find item by the index
  const foundCartItem = copy[index];

  //update the old qty to the new qty
  foundCartItem.qty = +inputValue;

  //save the update
  localStorage.setItem("cart", JSON.stringify(copy));

  //call cartTotal
  displayCartTotal();
}

function removeCartHandler(e) {
  const title =
    e.target.parentElement.parentElement.getElementsByClassName("cart-title")[0]
      .textContent;

  //get store and filter out cart item with the title
  const store = getStoreCartItems();
  const copy = [...store];

  const newCartItems = copy.filter(
    (item) => item.title.toLowerCase() !== title.toLowerCase()
  );

  //save update back to storage
  localStorage.setItem("cart", JSON.stringify(newCartItems));

  // displayCartItems();
  location.reload();
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
