//regular expression- searches for pattern in a text.

//1. using RegExp constructor class
const pattern_1 = "spam";
const reg = new RegExp (pattern_1, "ig");
console.log(reg);

//2. using two forward slashes
const reg_2 = /spam/gi;


const data_1 = "Javascript is a programming language with powerful capabilities both on the web, mobile and desktop. Javascript is at par with python."

//test that the data above contains javascript ignore case sensitivity
const present = /javascript/i.test(data_1); // using test method
console.log(present, "present");

//find all match of the supplied input field {Match}
const submit = document.getElementById("submit");
submit.addEventListener("click", function(e) {
    const inputElement = document.getElementById("name");
    const inputValue = inputElement.value;
    console.log(inputValue);

    const pattern_2 = new RegExp(inputValue, "gi");
    const searResult = data_1.match(pattern_2);

    console.log(searResult, "search");
});


//search - returns index if present and -1 if not prersent 
const search = data_1.search(/javascript/gi);
console.log(search);

//replace every javascript found
const replace = data_1.replace(/javascript/gi, "Python");
console.log(replace);