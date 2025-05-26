let createListItem = (listItem:string):void =>
    document.write(`<ul>
                        <li>${listItem}</li>
                        <li>${listItem}</li>
                        <li>${listItem}</li>
                    </ul>`);

createListItem("OKTEN is cool!")