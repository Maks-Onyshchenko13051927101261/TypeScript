// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

const btn:HTMLElement | null = document.getElementById('btn');
const textElement:HTMLElement | null = document.getElementById('text');
if (btn && textElement) {
    btn.onclick = () => {
        textElement.style.display = 'none';
    }
}