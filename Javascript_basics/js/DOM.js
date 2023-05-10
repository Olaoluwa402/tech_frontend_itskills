//interact wiwth the paragram element on trhe page
const ulById = document.getElementById("list"); //returns the element object directly
const cart = document.getElementById("cart");
const item = ulById.getElementsByClassName("item");
const ulByClass = document.getElementsByClassName("list"); //return html collection an array-like object
const ulByTagname = document.getElementsByTagName("ul"); //return html collection an array-like object
const ulBySelectorId = document.querySelector("#list");
const ulBySelectorClass = document.querySelector(".list");
const ulBySelectorTag = document.querySelector("ul");
const ulBySelectorAll = document.querySelectorAll(".list");
console.log(ulById, "ulById");
console.log(ulByClass, "ulByClass");
console.log(ulByTagname, "ulByTag");
console.log(item[0], "item");
console.log(ulBySelectorId, "SelectorId");
console.log(ulBySelectorAll, "SelectorAll");

//access all item in the HTML collection
for (let i = 0; i < ulByClass.length; i++) {
  const current = ulByClass[i];
  current.textContent = "I am a list item";
  current.style.color = "green";
  current.style.fontSize = "5rem";
  current.style.cursor = "pointer";
  current.addEventListener("click", function () {
    current.style.color = "red";
  });
  console.log(current, "current");
}

//three methods to add class to element
//using className
//ulById.className = "todo"; // this method will overide any class name used already

//using SetAttribute
//ulById.setAttribute("class", "todo"); // this method will overide any class name used already

//using classList - classList have three methods add(), remove(), toggle
ulById.classList.add("todo", "new");

const cartData = [
  {
    id: 1,
    title: "product 1",
    price: "$200",
    desc: "this is a description",
    qty: 1,
    color: "green",
  },
  {
    id: 2,
    title: "product 1",
    price: "$300",
    desc: "this is a description",
    qty: 1,
    color: "green",
  },
];
//cart
cart.innerHTML = `
  <div class='cart-item'>
    <h4>${cartData[0].title}</h4>
    <div class='cart-detail'>
        <p>price:${cartData[0].price}</p>
        <p>Qty:${cartData[0].qty} </p>
    </div>
  </div>
`;

//creating element
const div = document.createElement("div");
div.className = "extra";
div.style.width = "700px";
div.style.height = "400px";
div.style.backgroundColor = "green";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.justifyContent = "center";
div.style.color = "#ffffff";
div.textContent = "Hello world";

document.getElementById("btn-submit").addEventListener("click", () => {
  console.log("hottttt");
  alertBox("Your score is 70", "succ");
});

document.getElementsByTagName("body")[0].appendChild(div);

function alertBox(message, msgClass) {
  const alertWrapper = document.getElementById("alert-wrapper");
  const bgColor = msgClass == "success" ? "green" : "red";
  const div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "250px";
  div.style.borderRadius = "5px";
  div.style.backgroundColor = `${bgColor}`;
  div.style.color = "#fff";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.textContent = `${message}`;
  alertWrapper.appendChild(div);

  //make the box disappear after 5sec
  setTimeout(() => {
    alertWrapper.innerHTML = "";
  }, 5000);
}
