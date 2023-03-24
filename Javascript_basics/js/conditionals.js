//conditionals

//1. if
let num = "20";
let num2 = 10;
const result = !(num > num2 && num2 % 2 === 0);
const result_2 = num + num2;
console.log(typeof result_2);
if (result_2) {
  //code goes here
  console.log("We have a useful answer");
}

//f else
if (2) {
  console.log("We have a useful answer");
} else {
  console.log("Not  useful answer");
}

//f elseif elsef else
let weather = "raini";
if (0) {
  console.log("We have a useful answer 1");
} else if (1 > 3) {
  console.log("We have a useful answer 2");
} else if (weather === "raining") {
  console.log("Go out with your raincoat");
} else {
  console.log("Non of the conditions apply");
}

//switch
let dayOfWeek = "Sunday";
switch (dayOfWeek.toLowerCase()) {
  case "monday":
    console.log(`Today is ${dayOfWeek}`);
    break;
  case "tuesday":
    console.log(`Today is ${dayOfWeek}`);
    break;
  case "wednesday":
    console.log(`Today is ${dayOfWeek}`);
    break;
  case "thursday":
    console.log(`Today is ${dayOfWeek}`);
    break;
  case "friday":
    console.log(`Today is ${dayOfWeek}`);
    break;
  case "saturday":
    console.log(`Today is ${dayOfWeek}`);
    break;
  case "sunday":
    console.log(`Today is ${dayOfWeek}`);
    break;
  default:
    console.log(`Not days of the week`);
}

let age = "john";
switch (true) {
  case age > 18:
    console.log("You are eligible to vote");
    break;
  case age < 18:
    console.log("You are not eligible to vote");
    break;
  default:
    console.log("Not a valid number");
}
