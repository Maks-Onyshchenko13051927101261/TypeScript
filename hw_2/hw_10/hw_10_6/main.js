"use strict";
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
const inputConvert = document.getElementsByTagName("input")[0];
const result = document.getElementsByTagName("div")[0];
if (inputConvert) {
    inputConvert.addEventListener("input", function () {
        result.innerText = `${+this.value * 2.2}`;
    });
}
