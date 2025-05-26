let creatUserCart = (array:any[]):void => {
    for (let arrayEl of array) {
        document.write(`<ul>
                            <li>${arrayEl.id}</li>
                            <li>${arrayEl.name}</li>
                            <li>${arrayEl.age}</li>
                        </ul>`);
    }
}

creatUserCart([]);