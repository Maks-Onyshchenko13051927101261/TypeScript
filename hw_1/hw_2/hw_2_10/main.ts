let numA: string | null = prompt("Enter number a");
let numB: string | null = prompt("Enter number b");

if(numA !== null && numB !== null){
    let a = +numA;
    let b = +numB;
    if (a === b) {
        console.log("A = B");
    } else if (a > b) {
        console.log("A > b");
    } else {
        console.log("a < B");
    }
}
