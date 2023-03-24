const { log } = console;

// declaring an array and accessing array values
const arr = [
  "James",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["Javascript", "HTML", "CSS", "React", "Python"] },
];

log(arr[0]); //James
log(arr[1]); //250
log(arr[2]); //true
log(arr[3]); //{ country: "Finland", city: "Helsinki" }
log(arr[3].country); // Finland
log(arr[3]["country"]); //Finland
log(arr[4]); // { skills: ["Javascript", "HTML", "CSS", "React", "Python"] }
log(arr[4]["skills"][arr[4]["skills"].length - 1]);
log(arr[4].skills[4]);

//modify array elements
const arr2 = [1, 2, 3, 4, 5, 6];
log(arr2, "arr2");
log("----------------------");
arr2[arr2.length - 1] = (arr2.length - 1) * 2; // chage 6 to 10
log(arr2, "arr2");

//1. fill method
const arr3 = Array(5);
log(arr3);
//fill the empty space with 0
arr3.fill(0);
log(arr3);

//2. concat

const arr4 = [1, 2, 3, 2, 4];
const arr5 = [5, 5, 6, 7];

let finalArray;
if (arr4.includes(6) && arr5.length > 4) {
  //order is important
  finalArray = arr4.concat(arr5);
} else {
  finalArray = arr5.concat(arr4);
}

log(finalArray, "finalArray");

//length
log(arr4.length); //4

//indexOf and lastIndexOf
log(arr4.indexOf(2), "indexOf"); //1
log(arr4.indexOf(12), "indexOf"); // -1
log(arr4.lastIndexOf(2), "lastIndexOf"); //3

//includes - as discussed in string methods

//Array.isArray: To check if the data type is an array
const arr6 = [1, 2, 3, 4, 5, ["john", "Dayo"], 6, 7, 8, 9, 10];
log(Array.isArray(arr6), "Array.isArray"); //true

let numbers = [];
for (let i = 0; i < arr6.length; i++) {
  if (Array.isArray(arr6[i])) {
    //skip
    continue;
  } else {
    numbers.push(arr6[i]);
  }
}

log(numbers, "numbers");

//toString: Converts array to string
const arr7 = ["john", "timi"];
const toString = arr7.toString();
log(toString, "arrToString");

//join - converts array to string with each element separator the the specified character
log(arr7.join());
log(arr7.join(""));
log(arr7.join(" "));
log(arr7.join("-"));
log(arr7.join("#"));
