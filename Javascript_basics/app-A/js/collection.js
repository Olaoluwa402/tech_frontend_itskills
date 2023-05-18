import {
  alertBox,
  displayNoOfItemsInCart,
  getStoreCartItems,
  formatPrice,
} from "./common.js";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  //display products if any from local stroage
  displayProducts();

  //update cart count
  displayNoOfItemsInCart();

  //open add modal
  const openAddItemModalBtn = document.getElementsByClassName("add-item")[0];
  openAddItemModalBtn.addEventListener("click", openModal);

  //open add modal
  const closeAddItemModalBtn = document.getElementsByClassName("fa-times")[0];
  closeAddItemModalBtn.addEventListener("click", closeModal);

  //add item
  const addItemBtn = document.getElementById("submitItem");
  addItemBtn.addEventListener("click", addItemHandler);

  //add to cart button
  const addToCartBtn = document.getElementsByClassName("collection-items-btn");

  for (let i = 0; i < addToCartBtn.length; i++) {
    const currentBtn = addToCartBtn[i];
    currentBtn.addEventListener("click", addToCartHandler);
  }
}

function addToCartHandler(e) {
  const currentBtn = e.target;
  const collectionItem = currentBtn.parentElement.parentElement;
  const title = collectionItem.getElementsByClassName(
    "collection-items-title"
  )[0].textContent;

  const price = collectionItem.getElementsByClassName(
    "collection-items-price"
  )[0].textContent;

  const imageUrl =
    collectionItem.getElementsByClassName("collection-img")[0].src;

  const priceSymbolTrailingSpaceAndCommaRemoved = +price
    .slice(4, price.length - 3)
    .replace(/,/g, "");

  //check that title does not exist already
  //1. get acrt
  const cart = getStoreCartItems();
  console.log(cart);
  const titleExist = cart.find(
    (product) => product.title.toLowerCase() === title.toLowerCase()
  );
  if (titleExist) {
    alertBox("Product with title already exist");
    return;
  }

  const cartItem = {
    title,
    price: priceSymbolTrailingSpaceAndCommaRemoved,
    imageUrl,
    qty: 1,
  };

  addToCart(cartItem);
}

function addToCart(cartItem) {
  const cartItems = getStoreCartItems();

  //create a copy opf the cart store
  const cartItemsCopy = [...cartItems];

  //push the new item into cartItemsCopy
  cartItemsCopy.push(cartItem);

  //update local storage with the neww record
  localStorage.setItem("cart", JSON.stringify(cartItemsCopy));

  //update cart count
  displayNoOfItemsInCart();

  alertBox("Item added to cart", "success");
}

function openModal() {
  const addModal = document.querySelector(".add-modal");
  addModal.classList.add("open")
}

function closeModal() {
  const closeModal = document.querySelector(".add-modal");
  closeModal.classList.remove("open");
}

function addItemHandler(e) {
  e.preventDefault();
  //collect the input values
  const title = document.getElementById("title").value.trim();
  const price = document.getElementById("price").value.trim();
  const imageUrl = document.getElementById("imageUrl").value.trim();
  const desc = document.getElementById("desc").value.trim();

  //validation
  if (!title || !price || !imageUrl || !desc) {
    alertBox("All fields are required");
  }

  //check that title does not exist already
  //1. get store
  const store = getStore();
  const titleExist = store.find(
    (product) => product.title.toLowerCase() === title.toLowerCase()
  );
  if (titleExist) {
    alertBox("Product with title already exist");
    return;
  }

  const item = {
    id: title + "-" + Math.random() * 1000000,
    title,
    price,
    imageUrl,
    desc,
  };

  //save to local storage
  saveToStore(item);

  //clear input field
  clearAddItemInputs();

  displayProducts();

  //close modal
  closeModal();

  alertBox("Product added", "success");
}

function saveToStore(item) {
  const productsFromStore = getStore();

  //create a copy of store to prevent modifying store directly
  const storeCopy = [...productsFromStore]; //productsFromStore.slice()

  //push item to array
  storeCopy.push(item);

  //save back the new update to store
  localStorage.setItem("products", JSON.stringify(storeCopy));
}

function clearAddItemInputs() {
  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("imageUrl").value = "";
  document.getElementById("desc").value = "";
}

//display products
function displayProducts() {
  //get products from store
  const products = getStore();
  // display product to UI
  displayProductsToUI(products);
}

function displayProductsToUI(products) {
  const collection = document.getElementsByClassName("collection")[0];
  collection.innerHTML = "";
  products &&
    products.length > 0 &&
    products.forEach((product) => {
      const collectionItem = document.createElement("div");
      collectionItem.className = "collection-items";
      collectionItem.innerHTML = `

      <div style="width: 100%; height: 300px">
      <img
        src=${product.imageUrl}
        alt="items"
        class="collection-img"
      />
    </div>

    <h4 class="collection-items-title">${product.title}</h4>
    <div class="collection-items-footer">
      <span class="collection-items-price">${formatPrice(product.price)}</span>
      <button class="btn collection-items-btn">ADD TO CART</button>
    </div>
      
      `;

      collection.appendChild(collectionItem);
    });
}

function getStore() {
  return localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
}
