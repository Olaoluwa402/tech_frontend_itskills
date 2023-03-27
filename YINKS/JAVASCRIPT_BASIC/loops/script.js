// loop 
const arr_1 =[1,4,"john",  7, "shayo", "moji", 10];
let allstr = [];
console.log(allstr)
for(let i =0; i <arr_1.length; i++){
  const curr = arr_1[i];
  if(typeof curr ==="string" ){
allstr.push(arr_1[i])
  }
}
console.log(allstr);


// while loop


// operators and conditionals
// if
// else

// if else

// truthy values will evaluate to true
// value is different from expression
// 3<4 is an expession
// boolan context is where you are expecting true of false
// truethy values are all numbers  all strings all boolan expect zeor, empty strings,On ,undefined, nan the boolen false, null


// OPERATORS
// special sysmbol  

// ARITHMETIC OPERAORS

// TERNARY OPERATION
  // an alterntive to write if else statement
  // ?:
  let isloggnd = true
  const result = isloggnd ?"yes you are logged in":"no you are not logged in";
  console.log(result);

  let age = 20;
  const finla = age > 18 ? "you are an adult":"you are not an adult";
  console.log(finla);

  // WINDOW METHOD
  // ALERT
  // alert("hello how are you doing");
  // PROMPT:FOR INTERACTION
//  let value= prompt("how old are you","number goes here");
//  console.log(value)
  // WINDOW CONFIRM
  // const decision = confirm("are you sure you want thsi removed");
  // if(decision){
  //   console.log("yes, it has been removed")
  // }else{
  //   console.log("not removed")
  // }

  // DATE OBJECT

  const now = new Date()
  console.log(now)


  function formatdate(now){
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const formatdate = `${year}-${month}-${day}-${hours}${minutes}` 
    return formatdate;
  }
const resdate = formatdate(new Date());
console.log(resdate,"resDate ")

// CONDITIONALS
// five basic rules of implimenting conditionlas
// IF: means you are writting a block of code to be excuted if the condition is true

let num = 20;
let num2 = 10;
const results =!(num > num2 && num2 %2===0);



// SWITCH
// write swich with  cases, the allow you handle you want to test
let daysoftheweek = "sunday"
switch(daysoftheweek.toLocaleLowerCase()){
case "monday":
  console.log()      
}







  
let numberss = [1,2,3,4,5];
newn = [];
const arrynumbers = (num) =>{
  for(let i =0; i < num.length; i++){
    newn.push(num[i]*2)
  }
  console.log(newn);
  return newn;
}

