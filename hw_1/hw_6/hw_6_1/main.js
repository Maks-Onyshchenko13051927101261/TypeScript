"use strict";
let arrString = ["hello world", "lorem ipsum", "javascript is cool"];
let stringLength = (arr) => {
    for (let arrEl of arr) {
        console.log(arrEl.length);
    }
};
stringLength(arrString);
