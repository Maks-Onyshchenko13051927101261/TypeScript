// #gsKLAsNWM
// Через Array.prototype. створити власний foreach, filter

class MyArray extends Array {

    // Array.prototype - foreach

    myForEach(array:any[]):void {
        for (const element of array) {
            console.log(element);
        }
    }
    // Array.prototype - filter, за моєю умовою повертає масив з парними індексами

    myFilter(array:any[]):void {
        let arr=[];
        for (const element of array) {
            if (array.indexOf(element) % 2 === 0) {
              arr.push(element);
            }
        }
        console.log(arr);
    }
}

const arrNum:number[] = [23, 69, 85, 45, 78, 36];

MyArray.prototype.myFilter(arrNum);
MyArray.prototype.myForEach(arrNum);
