let swapArr = (arr:any[], indexA:number, indexB:number):any[]|string => {
    if (indexA < arr.length && indexB < arr.length) {
        let temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        return arr;
    }
    return "invalid value";
}
console.log(swapArr([],0,1));