// #OPLI89c9G
let arrayStr:string[] = ["Main","Products","About us","Contacts"];

let menuList:HTMLUListElement = document.createElement("ul");
for (const item of arrayStr) {
    const liItem:HTMLLIElement = document.createElement("li");
    liItem.innerText = item;
    menuList.appendChild(liItem);
}
document.body.appendChild(menuList);