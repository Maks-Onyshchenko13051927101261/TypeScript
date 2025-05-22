type Authors = { name: string, age: number };
type BooksArr = { title: string, pageCount: number, genre: string, authors: Authors[] };

let bookA: BooksArr = {
    title: "Book1",
    pageCount: 452,
    genre: "triller",
    authors: [
        {name: "John Smith", age: 58},
        {name: "Bill Gill", age: 75},
    ]
};
let bookB: BooksArr = {
    title: "Book2",
    pageCount: 658,
    genre: "sonnet",
    authors: [
        {name: "Arnold Grill", age: 89},
        {name: "Bill Gill", age: 75},
        {name: "Vasya Pupkin", age: 48},
    ]
};
let bookC: BooksArr = {
    title: "Book3",
    pageCount: 394,
    genre: "comedy",
    authors: [
        {name: "Dasha Night", age: 38},
        {name: "Hrystya Peace", age: 46},
        {name: "Vasylyna Natural", age: 53},
    ]
};