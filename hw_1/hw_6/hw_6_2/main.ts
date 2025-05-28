let arrStr:string[] = ["hello world", "lorem ipsum","javascript is cool"];

let upperCase = (arr:string[]):void => {
    for (let arrEl of arr) {
        console.log(arrEl.toUpperCase());
    }
}

upperCase(arrStr);