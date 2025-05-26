let minNumberArr = (array:number[]):number => {
    let minNumber = array[0];
    for (let arrayEl of array) {
        if (arrayEl < minNumber) {
            minNumber = arrayEl;
        }
    }
    return minNumber;
}

console.log(minNumberArr([]));