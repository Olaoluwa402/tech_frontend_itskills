const { log } = console;
import { data_2, data_1 } from "./data.js";
import myName from "./data.js";
log(data_1, "data_1");

//JSON - light weight data in string format. Useful for transfering data across internet

//JSO provides us with two methods - JSON.parse() and JSON.stringify()
//1. JSON.parse
const jsosnData = data_2;
//convert the above jsonData to an actual JS object
const actualData = JSON.parse(jsosnData);
log(actualData, "actualData");
// const actualData = JSON.parse(jsosnData, (key, value) => {
//   log(key, value);

//   return key === "age" ? value * 2 : value;
// });
// log(actualData, "actualData");

//2. JSON.stringinfy

const dataToBeStringified = data_1;
const strigifiedData = JSON.stringify(dataToBeStringified);
log(strigifiedData, "stringData");

//localStorage methods
//1. localStorage - gets everything in stroe
// const store = localStorage;
// log(store, "store");

//2 setItem - saves item to local storage using a key
localStorage.setItem("js-key", JSON.stringify(data_1));
//3 getItem - gets a particular item wusing the set key
const item = JSON.parse(localStorage.getItem("js-key"));

log(item, "item");

//removeItem
localStorage.removeItem("js-key");

const store = localStorage;
log(store, "store");

//key
const keys = localStorage.key(1);
log(keys, "keys");

//clear
localStorage.clear();
