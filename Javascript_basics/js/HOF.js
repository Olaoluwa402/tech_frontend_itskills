//HOF
const { log } = console;
//callback
function callback(x) {
  return x ** 2;
}

//add is a HOF bcos it takes in the callback function as a parameter
function add(n) {
  return n(3);
}

log(add(callback)); //9

//sub is HOF bcos ts returns anotehr function as value
function sub(x) {
  return function (y) {
    return "Hello" + " " + x * y;
  };
}
const innerValue_1 = sub(3)(5);
log(innerValue_1);
const result = sub(3);
const innerValue = result(5);
log(innerValue);

//setInterval
const greet = () => {
  log("Hello John");
  return "Hello John";
};

//setInterval(greet, 3000);

//setTimeOut
setTimeout(greet, 8000);

//forEach
const data = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const data_3 = [10, 2, 5, 4, 9, 6, 30, 12];
const data_2 = [
  {
    d: 1,
    title: "the title one",
    price: "$300",
    desc: "This is description",
  },
  {
    d: 2,
    title: "the title two",
    price: "$50",
    desc: "This is description",
  },
  {
    id: 3,
    title: "title one",
    price: "$200",
    desc: "This is description",
  },
];
let total = 0;
data.forEach((curr, i, arr) => {
  //   log(` ${i} ${curr}`);
  total = total + curr;
});

log(total, "total");

//map() - returns a new array
const mapResult = data_2.map((product) => parseInt(product.price.slice(1)));
log(mapResult, "mapResult");

//reduce()
const reduceResult = mapResult.reduce((acc, cur) => acc + cur, 0);
log(reduceResult, "reduceREsult");

const resultVersion2 = data_2
  .map((product) => parseInt(product.price.slice(1)))
  .reduce((acc, cur) => acc + cur, 0);

log(resultVersion2);

//filter
const filteredResult = data_2.filter(function (product) {
  return +product.price.slice(1) > 100;
});

log(filteredResult, "filteredResult");

const searchTitle = data_2.filter((product) =>
  product.title.startsWith("the title")
);

log(searchTitle, "search");

//every - returns true iif all items n the array fulfll the gven condition
const isEvery = data.every((num) => typeof num === "number");
log(isEvery, "isEVery");

//some- returns true if atleast one of the items in the array fulfll the gven condition
const isSome = data.some((num) => num > 16);
log(isSome, "isSome");

//write a functon that performs a search and returns only one thing
function findAndReturn(data, id) {
  return data.find((p) => p.id == id);
}

const foundItem = findAndReturn(data_2, 3);
log(foundItem, "foundItem");

//sort numbers without callback function
const sorted = data_3.sort();
log(sorted, "sorted");

//sorte correctly usng callback function
const correctlySorted = data_3.slice().sort((a, b) => a - b);

//reverse
//const correctlySorted = data_3.slice().sort((a, b) => b - a);
log(correctlySorted, "correct");

//sort an array of object
const dataSorted = data_2
  .slice()
  .sort((a, b) => +a.price.slice(1) - +b.price.slice(1));
log(dataSorted, "dataSorted");
