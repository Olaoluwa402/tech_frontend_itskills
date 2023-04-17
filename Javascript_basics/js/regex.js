//regular expression - searchs for pattern in a test
//Two ways to declare a regex instance
//1. using RegExp costructor class
const { log } = console;
const pattern_1 = "spam";
const reg = new RegExp(pattern_1, "ig");
log(reg, "reg");

//2. using two forward sashes //
const reg_2 = /spam/gi;

const data_1 =
  "Javascript is a programming language with 2023, 19, 12 powerful capabilities both o the web, mobile and desktop. Javascript is at per with Python";

//test that the data above contains javascript. ignore case
const isPresent = /javascript/gi.test(data_1); //usig test method
log(isPresent, "isPreset");

//find all all matchs of the supplied input field
const subitBtn = document.getElementById("btn-submit");
subitBtn.addEventListener("click", function (e) {
  const inputElement = document.getElementById("name");
  const inputValue = inputElement.value;
  log(inputValue);

  const pattern_2 = new RegExp(inputValue, "ig");
  const searchResult = data_1.match(pattern_2);
  const ul = document.getElementById("list");

  if (searchResult) {
    searchResult.forEach((element) => {
      log(element, "serach");
      const li = document.createElement("li");
      li.className = "item";
      li.style.color = "green";
      li.textContent = element;
      ul.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No item found";
    ul.appendChild(li);
  }
});

//search - returns an index if preset ad -1 if absent
const search = data_1.search(/javacript/gi);
log(search, "search");

//replace every javascript foud
const replace = data_1.replace(/javascript/gi, "Python");
log(replace, "replace");

const pattern_3 = /^javascript/gi; //starts with javascript
const pattern_4 = /[^0-9]/gi; //not digit
const result_2 = data_1.match(pattern_3);
const result_3 = data_1.match(pattern_4);
log(result_2, result_3, "reg");

const pattern_5 = /\d+/g;
const result_4 = data_1.match(pattern_5);
log(result_4.join("-"), "reg");
