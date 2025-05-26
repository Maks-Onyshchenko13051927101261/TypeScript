function arrayMinValue(array: number[]): number {
    let minValue:number = array[0];
    for (let arrayElement of array) {
        if(arrayElement < minValue) {
            minValue = arrayElement;
        }
    }
    return minValue;
}

console.log(arrayMinValue([]));