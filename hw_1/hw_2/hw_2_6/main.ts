let xString:string | null = prompt("ведіть числове значення 'a'");

if (xString !== null){
    let xNumber = +xString;
    if (xNumber !== 0) {
        console.log("Вірно");
    } else {
        console.log("Невірно");
    }
}