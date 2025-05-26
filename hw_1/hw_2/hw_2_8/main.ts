let dayString: string | null = prompt("Enter day");

if(dayString !== null) {
    let day:number = +dayString;
    if (day >= 1 && day <= 10) {
        console.log("1st decade");
    } else if (day > 10 && day <= 20) {
        console.log("2nd decade");
    } else if (day > 20 && day <= 31) {
        console.log("3rd decade");
    }
}