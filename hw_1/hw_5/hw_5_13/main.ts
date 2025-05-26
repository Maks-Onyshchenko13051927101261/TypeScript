let exchangeCoin = (sumUAH: number, arr: { currency: string, value: number }[], coin: string): number => {
    if (arr) {
        for (let arrEl of arr) {
            if (arrEl["currency"] === coin) {
                return sumUAH / arrEl["value"];
            }
        }
    }
    return -1;
}

console.log(exchangeCoin(10000, [{currency: "USD", value: 40}, {currency: "EUR", value: 42}], "USD"));