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

// setInterval(greet, 3000);

//setTimeOut
setTimeout(greet, 8000);

//forEach
const data = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const data_2 = [
  {
    title: "the title one",
    price: "$300",
    desc: "This is description",
  },
  {
    title: "the title two",
    price: "$50",
    desc: "This is description",
  },
  {
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
