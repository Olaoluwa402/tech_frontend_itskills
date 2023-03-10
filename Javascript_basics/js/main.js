const { log } = console;
//1. single line comments
const comment = "comment"; //this ia a comment
//2. multiple lie comments
/* this is a ultiple lie commenet
this is a ultiple lie commenet
this is a ultiple lie commenet
*/

// data types - primitive
//1. string
/*
"ola" // double quote
'John' // single quote
`Sade` //backticks or string literals
*/

//1.Number
/*
20  //integer
29.28 //float
*/

//3. Boolean
//True or False

//4. undefined
/*
  const a = undefined
  let b;  //results to u defined
  */

// 5.null
//const c = null

//checkig data types
const a = "john";
console.log(typeof a);

const data = [1, 2, 4, "john", "peter"];
const result = data.map((item) => {
  let modified = item;
  if (typeof item == "string") {
    modified = item.toUpperCase();
  }

  return modified;
});

console.log(result, "result");

// var vs let vs const
//var
var va = 15;
//downside - allows redeclaring of an already declared variable
var f = 12;
var f = "John";
var f = "James";

//let  - allow you to re-asign a value to a variable without redeclaring the variable
let letA = 30;
if (true) {
  letA = 50; //re-asiging of a value to  variable
}

//const - never allows you to re-assign or re-declare

// const constA = 30; //correct
// constA = 50; //ot possible

//valid variable name

//wrong variables
/* 
const 3 = 'john' // must ot start with a number
cost .name = 'john' // must ot start with special characters except $ and _
cost a b = '12 // must not have space
*/

//correct
/* 
const ab = "john";
const _ab = "john";
const $ab = "john";
const userName = "john";

*/

//inlinen declaration of variables
//let nam = "john"; lastName = "dan";

//primitive data type - set values not mutable

const newName = "Javascript"; //string immutable , primitive
const arr = ["j", "h"]; //array - mutable, non primitive
arr[0] = "W"; //change first character from j to W
newName[0] = "W"; // change first character from j to W
console.log(newName[0]);
console.log(newName, "nothing changed"); //nothing change
console.log(arr, "first character changed");

// primitive data types are comparable
const aPre = 12;
const bPre = 30;
console.log(aPre == bPre);

//non - primitive - are not comparable
const cPre = [1, 2, "john", true]; //an array
const dPre = [1, 2, "john", true]; //an array

/* non primitive */
const objOne = {
  firstName: "John",
  lastName: "James",
  friends: ["dayo", "moyo"],
};

objOne["firstName"] = "Prince";
const objTwo = {
  firstName: "John",
  lastName: "James",
  friends: ["dayo", "moyo"],
};
/*end of non primitive */
console.log(objOne);
console.log(objOne == objTwo, "object");
console.log(cPre == dPre, "array");

//Numbers - intergers or floats
//integer
let intOne = 12;
//float
let floatOne = 12.33;

//math object
console.log(Math, "inbuit js method");

//what the object is like
const MathMy = {
  PI: 3.124,
};

//1. PI - gives the PI constant
const PI = Math.PI;
log(PI, "PI");

//2. round - rounds to the nearest whole number
const roundedValue = Math.round(PI);
const roundedValue_2 = Math.round(8.96);
const roundedValue_3 = Math.round(8.26);
log(roundedValue, roundedValue_2, roundedValue_3, "PI roundedValue");

//3. floor - rounds down to the lower boundry
const flooredValue = Math.floor(8.94); // 8 - 9
log(flooredValue, "floorVAlues");

//3. ceil - rounds down to the lower boundry
const ceiledValue = Math.ceil(8.94); // 8 - 9
log(ceiledValue, "ceiledVAlues");

//4.min - gets the minimum value from a list
const arr_2 = [-5, 4, 6, 2, 1, 4, 5];
const minValue = Math.min(-5, 4, 6, 2, 1, 4, 5);
const minValueArray = Math.min(...arr_2);
log(minValue, minValueArray, "minValue");

//max - gets the maximum value from a list
const maxValue = Math.max(-5, 4, 6, 2, 1, 4, 5);
log(maxValue, "maxValue");

//random - generates random number btw 0 and 1
const rand_1 = Math.random();
const rand_2 = Math.random() * 10;
const floorRand = Math.floor(rand_2);
log(rand_1, rand_2, floorRand, "random number");

//strig concatenation - means string addition
//can be done n different ways
//1. Using Addition Operator
const firstName = "John";
const lastName = "Doe";

const fullName = firstName + " " + lastName;
log(fullName, "full name");
//2. using template literal
const fullNameFromLiteral = `My name is ${firstName} ${lastName}`;
log(fullNameFromLiteral, "fullName literal");

// Escape sequences i strings
//1. newline

const newLine = "My name is John \nstart this text from the next line";
console.log(newLine);

const tab =
  "My name is John \n\tstart this text from the next line ad indent with 8spaces";
console.log(tab);

const backslash = "My name is John\\shade this holds a backslash";
console.log(backslash);

// const singleQuote = 'My name is John. this bird's';
// console.log(singleQuote);

//String Methods

//1.Length
const lstr = "Javas cript";
const len = lstr.length;
log(len, "length");

//applicatio of length
for (let i = 0; i < len; i++) {
  console.log(lstr[i]);
}

2; //accessing string characters using []
//get s n lstr above
const value1 = lstr[4];
const value2 = lstr[lstr.length - 1];
log(value1, value2, "values");

//3. toUpperCase
const lstrToUpper = lstr.toUpperCase();
log(lstrToUpper, "lstrToUpper");

const a1 = "Javascript";
const a2 = "JAVAScript";
log(a1.toUpperCase() == a2.toUpperCase());

//4. toLowerCase
const lstrToLower = lstr.toLowerCase();
log(lstrToLower, "lstrToLower");

//5.substr  - two argumets (startingIndex, noOfCharToSlice)

const sub = lstr.substr(4, 6);
log(sub, "sub");

//5.substring  - two argumets (startingIndex, stopIndex - but minus the last index)
const substring = lstr.substring(4, 6);
log(substring, "substring");

// application
//shorten text f too long
let txt =
  "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quae consequuntur praesentium aut maiores repellat odit labore voluptas soluta corrupti quas? Pariatur in veniam ut obcaecati quod? Quibusdam optio repudiandae numquam!";
const num = 33;
if (txt.length > num) {
  txt = txt.substr(0, num) + "...";
}

log(txt, "txt");

//6. split method - splits a string at a specified place ad returns an array.
const lstrSplit = lstr.split();
const lstrSplit2 = lstr.split(" ");
const lstrSplit3 = "John, James, Philip".split(",");
log(lstrSplit, "lstrSplit");
log(lstrSplit2, "lstrSplit2");
log(lstrSplit3, "lstrSplit3");

//application - asign 5 to John, 10 to James, 15 to Philip
const asignValues = "John, James, Philip".split(",");

let obj = [];
for (let i = 0; i < asignValues.length; i++) {
  const current = asignValues[i].toLowerCase().trim();

  if (current == "John".toLowerCase()) {
    obj.push({ John: 5 });
  } else if (current == "James".toLowerCase()) {
    obj.push({ James: 10 });
  } else if (current == "Philip".toLowerCase()) {
    obj.push({ Philip: 15 });
  }
}

log(obj, "obj");

//7. trim() - removes trailing space at the beginning annd at the end of a string
const trailingSpace = " I am coming ";
const newWithoutSpace = trailingSpace.trim();
log(trailingSpace, "trailingSpace");
log(newWithoutSpace, "withoutSpace");

//8. includes - checks if a substring is present in a string

const subst = "javascript is easy to learn";
const checkSub = subst.includes("easyy");

//application
if (checkSub) {
  log("easy is present");
} else {
  log("Not present");
}

//9.replace - takes two parameters, the old substring and the new substring
const replaceText = "javascript is easy to learn";

//check that substring is present before replacement usng includes
let keyword = "john";
let replaceValue = "python";
if (replaceText.includes(keyword)) {
  console.log(replaceText.replace(keyword, replaceValue));
} else {
  log(replaceText);
}

//10. charAt - takes index and returns the value at the index

const chatText = "Javascript";
log(chatText.charAt(0), "charAT");

//challenge - write a functiion that capitalizes a string

function capitalize(str) {
  const finalResult =
    str.charAt(0).toUpperCase() + str.substr(1, str.length - 1);
  return finalResult;
}

const resu = capitalize("python");

log(resu, "result");

//11. charCodeAt - takes in index annd returns the character code of the value at that index
const charCodeText = "Javascript";
log(charCodeText.charCodeAt(0));

//12. indexOf - takes in substring and returns the index if present else it returns -1

let indexText = "Javascript is easy";
let keyword2 = "a";
if (indexText.indexOf(keyword2) != -1) {
  console.log("test found");
} else {
  log("Not found");
}

//13. lastIndexOf - takes in substring and returns the index if present else it returns -1
log(indexText.lastIndexOf(keyword2));

//14. concat() - takes many strings and join them together to become a string

const str1 = "john";
const str2 = "Bayo";
const str3 = "Precious";
const arrnew = ["first", "second", "third"];
const finalString = str1.concat(str2, str3, ...arrnew);
log(finalString, "finalStr");

//15. startsWith - takes in a substring and checks if the search
//text starts with the entered substring

const searchText = "food is ready";
let args = "food is";
const searchResult = searchText.startsWith(args);
log(searchResult, "startsWith");

const searchData = [
  {
    title: "How to cook jollof rice",
    desc: "lorem ipsum",
  },
  {
    title: "cook jollof rice",
    desc: "lorem ipsum",
  },
  {
    title: "How to cook jollof rice",
    desc: "lorem ipsum",
  },
  {
    title: "How to cook jollof rice",
    desc: "lorem ipsum",
  },
  {
    title: "jollof rice",
    desc: "lorem ipsum",
  },
];

//find article(s) using the search text provided

let foundArtcles = [];

for (let i = 0; i < searchData.length; i++) {
  log(searchData[i]);
  const data = searchData[i];
  log(data, "data");
  if (data.title.toLowerCase().startsWith("how to".toLowerCase())) {
    foundArtcles.push(data);
  }
}

log(foundArtcles, "foundArtcles");

//16. endsWith
const endWthSearchText = "food is ready";
let argsEndWth = "ready";
const searchResult2 = searchText.endsWith(argsEndWth);
log(searchResult2, "endsWith");

//17. search - Takes in a substring and returns the index of the first match
const p1 = "food is ready";
const p1result = p1.search("ready");
if (p1result) {
  log(`The item was found at position ${p1result}`);
}

//18. match - Takes in a substring and returns an array containg items found.
//if nothng is found t returns null
const p2 = "food is ready yes it is ready";
const p2result = p2.match(/ready/gi); //'ready'
if (p2result) {
  log(p2result, "p2Result");
}

/* 
repeat(): it takes a number as argument and it returns the repeated version of the string.
*/

const p3 = "love";
log(p3.repeat(5));

//data casting - convert from one data type to another
const toBeConveretd = 15.113;

//convert to interger
const toInt = parseInt(toBeConveretd);
log(toInt, "toInt");

//convert to float
const toFloat = parseFloat(toBeConveretd.toFixed(2));
log(toFloat, "toFLoat");

//convert to number
const toNumber = parseFloat("20");
log(typeof toNumber, "type");
log(toNumber, "toNumber");
