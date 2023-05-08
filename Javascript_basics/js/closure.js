//closure - an inner function accessing the variable of an outer function is called closure

//case 1 : problematic bcos any function can alter the counter

// let counter = 0;

// function count() {
//   counter = counter + 1; //
//   return counter;
// }

// console.log(count()); //1
// console.log(count()); //2
// console.log(count()); //3

//solution to above make counter variable local to the function

//case 2: make counter local - this will not work bcos counter is reset to zero on every function call
// function count() {
//   let counter = 0;
//   counter = counter + 1;
//   return counter;
// }

// console.log(count()); //1
// console.log(count()); //1
// console.log(count()); //1

//case 3: have an inner function that accesses the variable of an outer function. this is called closure
function count() {
  let counter = 0;
  return;
}

const countFunc = count();
console.log(countFunc()); //1
console.log(countFunc()); //2
console.log(countFunc()); //3
