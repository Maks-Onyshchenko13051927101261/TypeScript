"use strict";
let stringToArray = (str) => {
    if (str) {
        return str.split(" ");
    }
    return "";
};
let strArr = "Ревуть воли як ясла повні";
console.log(stringToArray(strArr));
