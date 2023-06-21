//Algorithm 1

function temperature(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit)
    return fahrenheit;
}
temperature(10);

//Algorithm 2

function reverseStr(str) {
    let newStr = str.split('').reverse().join('');
    console.log(newStr);
}

reverseStr("hello world")

//Algorithm 3

function trunc(str, max) {
    if (str.length > max){
        let newStr = str.slice(0, max) + '...';
        console.log(newStr);
        return newStr;
    }
}

trunc("my name is slim shaddy", 7)

//Algorithm 4

function capitalize(str) {
    const arr = str.split(' ');
    let final = []
    for (let i = 0; i < arr.length; i++) {
        const firstName = arr[i].charAt(0).toUpperCase();
        const remaining = arr[i].slice(1)
        let toCap = firstName + remaining;
        final.push(toCap);
    }
    return final.join(" ")
}

console.log(capitalize("my name is king"));