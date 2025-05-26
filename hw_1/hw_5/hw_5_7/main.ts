let createItemsList = (textItem:string, numberItem:number):void => {
    document.write(`<ul>`);
    for(let i = 0; i < numberItem; i++){
        document.write(`<li>${textItem}</li>`);
    }
    document.write(`<ul>`);
}

createItemsList("OKTEN is cool!",7);