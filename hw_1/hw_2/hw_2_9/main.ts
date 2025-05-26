let dayWeek: string | null = prompt("enter day number of week");

let monday:number[] = [5, 10];
let tuesday:number[] = [3, 4];
let wednesday:number[] = [6, 12];
let thursday:number[] = [7, 8];
let friday:number[] = [9, 11];
let saturday:string = "weekend";
let sunday:string = "holiday";

if(dayWeek !== null){
    let day = +dayWeek;
switch (day) {
    case 1:
        console.log("Monday: ", monday);
        break;
    case 2:
        console.log("Tuesday: ", tuesday);
        break;
    case 3:
        console.log("Wednesday: ", wednesday);
        break;
    case 4:
        console.log("Thursday: ", thursday);
        break;
    case 5:
        console.log("Friday: ", friday);
        break;
    case 6:
        console.log("Saturday: ", saturday);
        break;
    case 7:
        console.log("Sunday: ", sunday);
        break;
    default:
        console.log("Invalid input");
        break;
}
}