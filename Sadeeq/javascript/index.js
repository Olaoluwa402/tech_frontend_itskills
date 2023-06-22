const arr11 = ["Dayo", "Moyo", "Sayo", "Ngozi", "Moji", "Precious", "James", "John"];
let ind = arr11.indexOf("Moji")
let newArr11 = arr11.splice(ind,4,"Collins","Rock","Faith","Kamsy");

console.log(ind)
console.log(newArr11, "newArr11");
console.log(arr11, "arr11")

//Push
const numPush = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let odd = [];
let even = [];
 for (let i = 0; i < numPush.length; i++) {
    if (numPush[i] % 2 === 0) {
        even.push(numPush[i])
    } else {
        odd.push(numPush[i])
    }
 }

 console.log(odd, "odd");
 console.log(even, "even")

 //