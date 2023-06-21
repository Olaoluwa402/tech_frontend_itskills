const length = document.querySelector("#length");
const width = document.querySelector("#width");
const button = document.querySelector("button");

let area;
button.addEventListener('click', () => {
    area = length.value * width.value;
    alert(`Area is: $(area.toFixed(2))`);
    console.log(area);
});

// let div = document.querySelector('#div')
// function alert1 (message, ){
//     div.innerHtml = 
// } 