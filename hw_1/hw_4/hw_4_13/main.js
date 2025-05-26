"use strict";
function exchange(sumUAH, arr, coin) {
    if (arr) {
        for (let arrEl of arr) {
            if (arrEl["currency"] === coin) {
                return sumUAH / arrEl["value"];
            }
        }
    }
    return -1;
}
console.log(exchange(10000, [{ currency: "USD", value: 25 }, { currency: "EUR", value: 42 }], "USD"));
