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

  const priceSymbolTrailingSpaceAndCommaRemoved = +price
    .slice(4, price.length - 3)
    .replace(",", "");

  const cartItem = {
    title,
    price: priceSymbolTrailingSpaceAndCommaRemoved,
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

function displayNoOfItemsInCart() {
  const items = getStoreCartItems();
  document.getElementsByClassName("cart-count")[0].textContent = items.length;
}

function openModal() {
  const addModal = document.querySelector(".add-modal");
  addModal.classList.add("open");
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

function getStoreCartItems() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

function formatPrice(price) {
  const fomattedPrice = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "NGN",
  }).format(+price);

  return fomattedPrice;
}

function alertBox(message, msgClass) {
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
