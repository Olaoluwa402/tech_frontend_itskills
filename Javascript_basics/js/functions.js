const { log } = console;
//syntax

//declaration function
function add(a, b) {
  const sum = a + b;
  return sum;
}

const result = add(12, 15); //function invoked
log(result);

//expression function
const subtract = function (a, b) {
  return a - b;
};
const subtractResult = subtract;
console.log(subtractResult(20, 5)); //15

function area(l, b) {
  return l * b;
}

const volume = area(2, 3) * 4; //=> 6 *4 =24
console.log(volume); //24

console.log(Math);

//anonymous/nameless functon
const anonymous = function (area, a, b, h) {
  const volume = area(a, b) * h;
  return volume;
};

console.log(anonymous(area, 2, 3, 4), "anonym");

//arrow fuction
const arrFunc = () => {
  return "Hello";
};

log(arrFunc());

//wrte a function that concatenate firstName and LastName
let firstName = "John";
let lastName = "Timothy";
function fullName(firstName, lastName) {
  return firstName + " " + lastName; //`${firstName} ${lastName}`
}

log(fullName(firstName, lastName));

const numbers = [1, 2, 3, 4, 5];
//add all the items in the array and return the total
function sum(arr) {
  log(arr); //[1, 2, 3, 4, 5]
  let total = 0;
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      total += arr[i]; //total = total + arr[i]
    }
    return total;
  } else {
    return "Pls supply an arr of numbers";
  }
}

log(sum("john"));

//handling unlimited parameters using normal functon
function n() {
  //   log(arguments, "arguments");
  for (let i = 0; i < arguments.length; i++) {
    log(arguments[i]);
  }
}

// n(2, 3, 4);
n(2, 3, 4, 5, 6, 7);
// n(2, 3, 4, 4, 6, 7, 8, 9, 0);

//handling unlimited parameters using arrow functon

const getName = (...list) => {
  log(list, "list");
};

getName("john", "james", "sayo");

//self involked function

log(
  (function () {
    return 2 + 3;
  })()
);

let countries = ["nigeria", "togo", "congo", "niger"];

function countryToUpperCase(arr) {
  let newCountry = [];
  for (let i = 0; i < arr.length; i++) {
    // log(arr[i].toUpperCase());
    newCountry.push(arr[i].toUpperCase());
  }
  return newCountry;
}

log(countryToUpperCase(countries));

//convert [1,2,3,4,5] => [2,4,6,8,10]
