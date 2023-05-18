// create new set using Class Set
const companies = new Set();

const fruits = ["mango", "orange", "mango", "carrot"]
const fruitSet = new Set (fruits);
console.log(fruitSet);

//size -  check lenght
const size = fruitSet.size;
console.log(size);

// create set using add function
companies.add("Facebook");
companies.add("Microsoft");

console.log(companies);

// iterate (loop) over a set.
let newFruit = [];
for(const fruit of fruitSet) {
    newFruit.push(fruit);
}

console.log(newFruit);

// delete 
companies.delete("Microsoft");

console.log(companies);

//Map

//create map from array
const mapArray = [
    ["Oyo", "Ibadan"],
    ["Koji", "Lokoja"],
    ["Lagos", "Ikeja"]
];

const newMap = new Map(mapArray);
console.log(newMap);

//add items to an empty map
const addMap = new Map();
addMap.set("Ogun", "Abeokuta");

console.log(addMap);


//get item from mapped collection

const getItem = newMap.get("Oyo");
console.log(getItem);

//iterate over a map collection

for (let item of newMap) {
    console.log(item);
}

for (let [state, capital] of newMap) {
    console.log(state, capital);
}


//Destructuring array and objects

//array
const data = [1, 2, 3, 4, 5];
const [a, b] = data;
console.log(a,b);

//ommit item while destructuring
const data_1 = [1, 2, 3, 4, 5];
const [a1, , c1] = data_1;
console.log(a1, c1);

// rest operator while destructuring (...)
const [p1, ...rest] = data_1
console.log(rest);

//object destructuring, object can only be destructured with the exact key in the object

const obj = {
    name: "john", age: 30,
};

const {name, age} = obj;
console.log(name, age);


//reasdsign variable name  while destructuring
const {name:n, age:ag} = obj; //this is how to reassign an already declared variable
console.log(n, ag);