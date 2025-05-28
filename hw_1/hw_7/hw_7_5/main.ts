class ClientConstructor {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    order: ProductConstructor[];

    constructor(id: number, name: string, surname: string, email: string, phone: string, products: ProductConstructor[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = products;
    }
}

class ProductConstructor {
    title: string;
    price: string;

    constructor(title: string, price: string | number) {
        this.title = title;
        this.price = `${price} UAH`;
    }
}

let arrayClients:ClientConstructor[] = [
    new ClientConstructor(1, "Olexander", "Shovkovskiy", "sasho@com.ua", "+1111111111",
        [new ProductConstructor("phone", 70000), new Product("tablet", 25300)]),
    new ClientConstructor(2, "Andriy", "Yarmolenko", "yarmola@com.ua", "+3698521472558",
        [new ProductConstructor("desktop", 120000), new Product("tv", 36000), new Product("sale", 0), new Product("insurance", 1500), new Product("bonus-product", 0)]),
    new ClientConstructor(3, "Olexander", "Zavarov", "zavarov@com.ua", "+3809632588745",
        [new ProductConstructor("laptop", 55000), new Product("tablet", 16200)]),
    new ClientConstructor(4, "Taras", "Myhavko", "taras@com.ua", "+380552313785",
        [new ProductConstructor("phone", 83600), new Product("playstation", 32800)]),
    new ClientConstructor(5, "Hrystyna", "Zelinska", "kris@com.ua", "+125463987452",
        [new ProductConstructor("tv", 325000), new Product("monitor", 21300), new Product("computer", 44444), new Product("bonus-product", 0)]),
    new ClientConstructor(6, "Marshall", "Meters", "eminem@com.ua", "+14582932584512",
        [new ProductConstructor("phone", 12000)]),
    new ClientConstructor(7, "Vitaliy", "Buyalskiy", "vitalya@com.ua", "+380569871235",
        [new ProductConstructor("playstation", 73569), new Product("tablet", 36200)]),
    new ClientConstructor(8, "Sergiy", "Rebrov", "rebrov@com.ua", "+380954566547",
        [new ProductConstructor("phone", 83800), new Product("insurance", 1300)]),
    new ClientConstructor(9, "Oleh", "Gusev", "gus@com.ua", "+380502587419",
        [new ProductConstructor("desktop", 54350), new Product("laptop", 31100), new Product("tablet", 23500), new Product("tv", 34600), new Product("sale", 0)]),
    new ClientConstructor(10, "Georgiy", "Buschan", "zhora@com.ua", "+196325874125",
        [new ProductConstructor("tablet", 43999), new Product("playstation", 25500), new Product("tv", 65999), new Product("sale", 0)])
];

console.log(arrayClients.sort((a,b)=>a.order.length - b.order.length));