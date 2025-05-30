"use strict";
// #bq1zkx7WP
// Cтворити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн,
// але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
const target = document.getElementsByTagName("div")[0];
const date = Date.now();
let time = Number(localStorage.getItem("time")) || 0;
let number = Number(localStorage.getItem("number")) || 0;
target.innerText = `${number + 100} UAH`;
if (date - time > 10 * 1000) {
    number += 10;
    localStorage.setItem("number", Number(number).toString());
    localStorage.setItem("time", JSON.stringify(date));
}
