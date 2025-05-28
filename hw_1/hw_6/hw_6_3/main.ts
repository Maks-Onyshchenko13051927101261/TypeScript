let array:string[] = ["HELLO WORLD", "LOREM IPSUM", "JAVASCRIPT IS COOL"];

let loweCase = (arr:string[]):void =>{
    for (let arrEl of arr) {
        console.log(arrEl.toLowerCase());
    }
}

loweCase(array);