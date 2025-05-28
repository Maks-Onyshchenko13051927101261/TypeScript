let arrString:string[] = ["hello world", "lorem ipsum","javascript is cool"];

let stringLength = (arr:string[]):void => {
    for (let arrEl of arr) {
        console.log(arrEl.length);
    }
}

stringLength(arrString);