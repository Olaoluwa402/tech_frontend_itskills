//set
const { log } = console;
//create a set using the Set class
const companies = new Set();
log(companies, "cop");

//Add item to a set
//1. by using array as the argument to Set
const fruits = ["mango", "orange", "apple", "banana", "mango", "orange"];
const fruitSet = new Set(fruits);
log(fruitSet, "fruitSet");

//size
const size = fruitSet.size;
log(size, "size");

//2. create set using add function
companies.add("Microsoft");
companies.add("google");
log(companies);

//iterate fruits
let fruitCap = [];
for (const fruit of fruitSet) {
  fruitCap.push(fruit.toUpperCase());
}

log(fruitCap, "fruitCap");

//delete
companies.delete("google");
log(companies);

//has
const has = companies.has("Microsoft");
log(has, "has");

//clear
companies.clear();

log(companies);

//union of set
const arr_1 = [1, 2, 3, 4, 5];
const arr_2 = [3, 4, 7, 8, 7];
const arr_3 = [...arr_1, ...arr_2];

const unionSet = new Set(arr_3);
log(unionSet, "unionSet");

//intersection of set
const B = new Set(arr_2);
[3, 4, 7, 8];
const intersectArr = arr_1.filter((number) => B.has(number)); //[3,4]
const interSect = new Set(intersectArr);
log(interSect, "intersect");

//difference
const differenceArr = arr_1.filter((number) => !B.has(number)); //[3,4]
const difference = new Set(differenceArr);
log(difference, "difference");

//Map

//create map from array
const mapArr = [
  ["Oyo", "Ibadan"],
  ["Kogi", "Lokoja"],
  ["Lagos", "Ikeja"],
];

const newMap = new Map(mapArr);
log(newMap, "newMap");

//add items to an empty map
const addMap = new Map();
addMap.set("Oyo", "Ibadan");
addMap.set("Ekiti", "Ado");

//get item of a map collection
const getItem = newMap.get("Oyo"); // Ibadan
log(getItem, "getItem");

//iterate over  a map collection
for (let item of newMap) {
  log(item);
}

for (let [state, capital] of newMap) {
  log(state, capital);
}
