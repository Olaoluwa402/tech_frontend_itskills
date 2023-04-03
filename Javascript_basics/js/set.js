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
