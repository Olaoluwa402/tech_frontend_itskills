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

function displayNoOfItemsInCart() {
  const items = getStoreCartItems();
  document.getElementsByClassName("cart-count")[0].textContent = items.length;
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

function cartTotal() {
  //get all cart items
  const cart = getStoreCartItems();

  const total = cart
    .map((product) => product.price)
    .reduce((acc, curPrice) => acc + curPrice, 0);

  return total;
}

export {
  alertBox,
  displayNoOfItemsInCart,
  getStoreCartItems,
  formatPrice,
  cartTotal,
};
