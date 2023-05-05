//interact wiwth the paragram element on trhe page
const ulById = document.getElementById("list"); //returns the element object directly
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
