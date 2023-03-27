//SINGLE COMMENT

//comment can make code readable
//welcome to javascript mastery

/* DOUBLE COMMENT */

/* comment can make code readable
easy to reuse and informative */

// let name = "yinka"; age = 30; result  = true; love = undefined; empty = null;

// console.log(typeof result)


// const PI = Math.PI;
// console.log  (PI, "PI");
// const roundValue = Math.round (PI);
// console.log (roundValue,"5PI roundValue")
// const newLine = "my name john \n start this form the next line"
// console.log(newLine)



// STRINGS MENTHOD

// upper case
const upper = "javascript";
const val = upper.toLocaleUpperCase();
console.log(val);


//  to lowercase
const lower = "JAVASCRIPT";
const vals = lower.toLocaleLowerCase();
console.log(vals);

// substr
const sub = "javascript";
const str = sub.substr(0,4);
const third = str.toLocaleUpperCase()
console.log(third);

// spilt
const spit = "javascript";
const spill = spit.split("");
console.log(spill)

// substring

const subS = "javascript";
const subT = subS.substring(0,6);
console.log(subT);

// include
const includess = "what do you want from me"
const check = includess.includes("what")
console.log(check);

// trim

const trr = "  30 days of javascript";
console.log(TransformStream);
const trimm = trr.trim("");
console.log(trimm);

// replace

const place = "i love javascript"
const re = place.replace("javascript", "react");
console.log (re);


//charAt 
const chat = "what is javascript about";
const art = chat.charAt(3);
console.log(art);

// chartcodeAt
const code = "what do you mean";
const arts = code.charCodeAt(9)
console.log(arts);

// indexOF
const index = "what a friend";
const indext = index.indexOf("f");
console.log(indext);


// lastindexOF
const last = "what a friend";
const indexxx = last.lastIndexOf("a");
console.log(indexxx);

// concat
const con = "i love";
const cat = " my mum";
const  contt = con.concat(cat) ;
console.log(contt); 

// startwith
const start = "food is ready"
const withss = start.startsWith("food");
console.log(withss);


// endtwith
const end = "food is ready"
const withsss = end.startsWith("food");
console.log(withsss);

// search
const saercb = "why is this so important";
const result = saercb.search("this");
console.log(result);


// match
const matches ="javascript is important very important to important people";
const mmatce = matches.match("is");
console.log(mmatce);

// repeat
const rep = "love";
const again  = rep.repeat(4);
console.log(again);

// length
const len = "without God its impossible";
const total = len.length;
console.log(total);

// strings
const strring = "what";
const strrings = strring.toString();
console.log(strrings)


// ARRAY MOTHOD
// fill
const fills = Array();
console.log(fills);
const fiills = Array(8).fill("x");
console.log(fiills);

// concat
const arry1 = ["what matter of love is this"];
const arry2 = ['that i have greatly expirence']
const arry3 = arry1.concat(arry2);
console.log(arry3);

// length
const leenght = [1,2,3,4,5];
const leenghy = leenght.length;
console.log(leenghy);

// indexOF
const list = ["moji","tunde", "bayo", "linda", "tunde", "tunde"];
const lista = list.lastIndexOf("tunde");
console.log(lista);

// array.isarray
const arry5 = [1,2,3,4,5,6,7,8,];
console.log(Array.isArray(arry5));
 
// pop
const po = ["banana", "mango", "orange", "pear"];
  po.push()
  console.log(po);

// slice
const arr1 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
let fn = arr1.slice(5)
// let fn;
// if(arr1.length > 5){
//   fn = arr1.slice(5);
// }  else{
//   fn = arr1.slice();
// }
console.log(fn)
    

const arry11 = ["dayo", "moyo", "sayo", "moji", "ngozi", "james" , "john", "preciou"];

// replace moji and the next three names four other names of your choice

const indexdd = arry11.indexOf("moji");

const arry12 = ["yinka", "niji", "sade","mimi"];

  const arry13  = arry11.splice(indexdd, 4,...arry12 );
console.log(arry13);


const arry15 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
//  numpush.push(15)
let  odd = [];
 let even = [];
 for(let i = 0; i <  arry15.length; i++){
arry15[i];
if(arry15[i]%2 === 0){
 even.push(arry15[i])
}else{
  odd.push(arry15[i])
}
 }

 console.log(odd)


//  LOOP
// for loop

const loops = "love"
for(let i = 0; loops.length < 5; i++){
console.log(loops);
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