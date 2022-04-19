firstNum = 14;
secondNum = 7;

document.getElementById("num1").textContent = firstNum;
document.getElementById("num2").textContent = secondNum;

let result = document.getElementById("result");

function add(){
    let sum = firstNum + secondNum;
    result.textContent = "result : " + sum;
}

function subtract(){
    let sub = firstNum - secondNum;
    result.textContent = "result : " + sub;
}

function multiply(){
    let product = firstNum * secondNum;
    result.textContent = "result : " + product;
}

function divide(){
    let division = firstNum / secondNum;
    result.textContent = "result : " + division;
}
