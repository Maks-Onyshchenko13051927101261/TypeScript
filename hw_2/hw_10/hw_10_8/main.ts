// #kUSgFqWY
// Створити 3 інпута та кнопку.
// Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

let creatTemplate: HTMLElement | null = document.getElementById("creatList");

let createForm: HTMLFormElement = document.forms[0];
createForm.addEventListener("submit", (event) => {
    if(creatTemplate) {
        creatTemplate.innerText = "";
        event.preventDefault();
        const templateRows = createForm.rows.value;
        const templateCells = createForm.cells.value;
        const templateText = createForm.textCell.value;
        for (let i = 0; i < templateRows; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < templateCells; j++) {
                const cell = document.createElement("td");
                cell.innerText = templateText;
                row.appendChild(cell);
            }
            creatTemplate.appendChild(row);
        }
    }
})