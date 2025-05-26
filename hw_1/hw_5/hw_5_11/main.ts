let sumArray = (arr:number[]):number => {
    let sum = 0;
    for (let arrEl of arr) {
        sum += arrEl;
    }
    return sum;
}
console.log(sumArray([]));