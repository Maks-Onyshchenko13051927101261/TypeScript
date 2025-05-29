"use strict";
// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в якому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let currentNumber = Number(localStorage.getItem("number")) || 0;
currentNumber += 1;
localStorage.setItem("number", currentNumber.toString());
const eventTarget = document.getElementsByTagName("div");
eventTarget[0].innerText = currentNumber.toString();
eventTarget[0].style.fontSize = "4em";
