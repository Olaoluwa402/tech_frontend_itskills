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
