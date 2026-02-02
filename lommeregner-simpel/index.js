"use strict";

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const dropdown = document.querySelector("#drop-down");
const resultField = document.querySelector("#result");
const button = document.querySelector("button");

button.addEventListener("click", calculate);

function calculate() {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const type = dropdown.value;
    
    let result;
    
    switch (type) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    
    resultField.value = result;
}