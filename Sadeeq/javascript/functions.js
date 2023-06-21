const {log} = console;
//1
const countries = ["Nigeria", "Ghana", "Libya", "Poland", "France"]
let result = [];
function country(arr) {
    for (let i = 0; i < arr.length; i++) {
        //log(arr[i]);
        result.push(arr[i].toUpperCase());
        log(result)
    } 
    return result;
    
}

country(countries);

//2
const numbers = [1, 2, 3, 4, 5];
let num = [];

function newNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        num.push(arr[i] + arr[i]); // num.push(arr[i] * 2);
    }
    log(num)
    return num
}
newNumbers(numbers)