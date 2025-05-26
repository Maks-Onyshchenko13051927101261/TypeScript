function swap(arr:any[], indexA:number, indexB:number):any[] | string {
    if (indexA < arr.length && indexB < arr.length) {
        let temp:number = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        return arr;
    }
    return 'invalid index';
}

console.log(swap([],1,0));