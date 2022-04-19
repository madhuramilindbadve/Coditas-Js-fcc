
let counter = document.getElementById("count-btn");
let saveEl = document.getElementById("save-el");
let count = 0;

function increase(){
    count = count + 1;
    counter.innerText = count;
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    counter.textContent = 0;
    count = 0;
}