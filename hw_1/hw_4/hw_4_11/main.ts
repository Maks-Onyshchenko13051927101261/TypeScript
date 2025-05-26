function sumArr(arr: number[]): number {
    let sum:number = 0;
    for (const arrEl of arr) {
        sum += arrEl;
    }
    return sum;
}
console.log(sumArr([]));