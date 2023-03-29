///scopes
//1. Window global object scope
a = 30;
console.log(a);
// console.log(window);

//2. global scope
let b = 20;

function add() {
  let c = 30;
  console.log(c, "c"); //local scope
}
add();

// console.log(c, "c"); //local scope

///var, let & const

function sub() {
  var h = 13;
  console.log(h, "h-inner");
}
sub();
// console.log(h, "h-outer");

if (true) {
  var h = 13;
  console.log(h, "h-inner");
}
console.log(h, "h-outer");

//creating an object
let person = {
  name: "John",
  age: 20,
  friends: ["John", "Collins"],
  sing: (function () {
    return "I a singing now";
  })(),
};
//accessing object values
//1.dot notation
//2. []

const name = person.name; //usng dot notation
const name_2 = person["name"]; //usng []
let key = "age";
const age = person[key]; //20
console.log(name, "nae");
console.log(age, "age");

let isSinging = person.sing;
console.log(isSinging);

//this keyword
const Car = {
  name: "Toyota",
  color: "Blue",
  model: 500,
  start: function () {
    return "car s about to move";
  },
  desc: () => {
    return `This is a nice ${this.name} car, model:${this.model}, with color: ${this.color}`;
  },
};

console.log(Car.desc());

//add new property
Car.acc = function () {
  return "Car is moving now";
};

Car.color = "Red";
console.log(Car, "car");

//Object methods
//Assign - used to copy an object
const copy = Object.assign({}, Car);
console.log(copy, "copy");

//keys
const keys = Object.keys(Car);
console.log(keys, "keys");

//values
const values = Object.values(Car);
console.log(values, "values");

//entries
const entries = Object.entries(Car);
console.log(entries, "entries");

//hasOwnProperty
const isPresent = Car.hasOwnProperty("color");
console.log(isPresent, "sPresent");
