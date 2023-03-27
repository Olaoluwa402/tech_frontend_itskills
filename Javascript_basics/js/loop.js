// /*for loop - iterates over a list of items or string
// character as long as the set condition is true
// */
// //syntax
// // for ("initiation"; "condition"; "increment/decrement") {
// //   //code goes here if condition is fulfilled
// // }

// //example
// //loop over the array given and convert all strings to uppercase
// //push all strings to a new array

// const arr_1 = [1, 4, "John", 8, "Sayo", "Moji", 10];

// let allStr = [];
// console.log(allStr, "before loop"); // []
// for (let i = 0; i < arr_1.length; i++) {
//   const curr = arr_1[i]; //current item

//   if (typeof curr === "string") {
//     allStr.push(arr_1[i]);
//   }
// }

// console.log(allStr, "after loop"); //[1, 4, "John", 8, "Sayo", "Moji", 10]

// //while loop
// const arr_2 = [1, 4, "John", 8, "Sayo", "Moji", 10];
// let j = 0; //count initiation
// let allWhileStr = [];
// while (j < arr_2.length) {
//   //condition
//   const curr = arr_1[j]; //current item
//   if (typeof curr === "string") {
//     allWhileStr.push(arr_1[j]);
//   }

//   j++; //increment/decrement
// }

// //do while loop - code executes atleast onces and every other time the condition is true
// let y = 0; //initiation
// do {
//   console.log(y);

//   y++; //increment
// } while (y <= 5);

// //for of loop - use for of loop when you don't need the index
// const arr_3 = [1, 2, 3, 4, 5];
// for (const num of arr_3) {
//   console.log(num, "curr tem in for of loop");
// }

// //break - mean stop the loop
// for (const num of arr_3) {
//   if (num == 3) {
//     break;
//   }
//   console.log(num, "from break");
// }

// //continue - means skip the current item and move to the next
// for (const num of arr_3) {
//   if (num == 3) {
//     continue;
//   }
//   console.log(num, "from break");
// }

//ternary operator
// ? :
let isLoggedn = true;
const result = isLoggedn
  ? "Yes, you are now logged n"
  : "No you are not logged in";

console.log(result); //

let age = 20;
const fnal = age > 18 ? "You are an adult" : "You are not an adult";
console.log(fnal);

//Wndows objects
// alert("This is a javascript course");

//prompt
// let value = prompt("How old are your?", "number goes here");
// console.log(value);

//confirm
// const decision = confirm("Are you sure you want this reoved?");

// if (decision) {
//   console.log("Yes, it has been removed");
// } else {
//   console.log("Not removed");
// }

//date objects
const now = new Date(); //insatntiate a new date object from the Date Class
console.log(now);

const year = now.getFullYear();
const month = now.getMonth() + 1; //0 - 11 => 1 - 12
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(formattedDate);

function formatDate(now) {
  const year = now.getFullYear();
  const month = now.getMonth() + 1; //0 - 11 => 1 - 12
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

  return formattedDate;
}

const resDate = formatDate(new Date());
console.log(resDate, "resDAte");
