let stringToArray = (str:string):string[]|"" => {
    if (str){
       return str.split(" ");
    }
    return "";
}

let strArr:string = "Ревуть воли як ясла повні";

console.log(stringToArray(strArr));