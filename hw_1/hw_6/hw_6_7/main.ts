function sortNums(numsArr:number[], directions:string):number[] {
    if(numsArr){
        if(directions === "ascending"){return numsArr.sort((a,b) => a - b);}
        if(directions === "descending"){return numsArr.sort((a,b) => b- a);}
    }
    return numsArr;
}
let nums:number[] = [11, 21, 3];

console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));