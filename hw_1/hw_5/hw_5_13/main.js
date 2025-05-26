"use strict";
let exchangeCoin = (sumUAH, arr, coin) => {
    if (arr) {
        for (let arrEl of arr) {
            if (arrEl["currency"] === coin) {
                return sumUAH / arrEl["value"];
            }
        }
    }
    return -1;
};
console.log(exchangeCoin(10000, [{ currency: "USD", value: 40 }, { currency: "EUR", value: 42 }], "USD"));
