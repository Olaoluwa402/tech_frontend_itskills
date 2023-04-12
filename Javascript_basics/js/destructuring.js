//destructuring - unpacking items in an arrayb or object into distinct variable
const { log } = console;
//array destructuring
const data = [1, 2, 3, 4, 5];
const data_2 = [
  { name: "john", age: 20 },
  { name: "Bayo", age: 25 },
  { name: "james", age: 25 },
];
const [a, b, c] = data;
log(a, b, c, "arrayDestructure");

//ommit item while destructuring
const [person_1, , person_3] = data_2;
log(person_1, person_3, "om");

//rest (...) operator while destructurng

const [p1, ...t] = data_2;
log(t, "rest");

//object destructuring
const obj = {
  name: "john",
  age: 30,
};

const { name, age } = obj;
log(name, age, "objDestr");

//reasign variable name while destructurng
const { name: n, age: ag } = obj;
log(n, ag);
