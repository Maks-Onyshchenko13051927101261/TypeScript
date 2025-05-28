class UserConst {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;

    constructor(id:number, name:string, surname:string, email:string, phone:string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let usersNewArr:UserConst[] = [
    new UserConst(1, "Volodymyr", "Dantes", "dantes@com.ua","+380585222546"),
    new UserConst(2, "Olexiy","Durnev", "durnev@com.ua", "+152368741558"),
    new UserConst(3, "Vlad", "Kuran", "kuran@mail.com", "+1987654322"),
    new UserConst(4,"Volodymyr", "Brazhko", "brazhko@com.ua", "+30504567892"),
    new UserConst(5, "Vlad", "Vanat", "vanat@com.ua", "+39875225897"),
    new UserConst(6, "Andriy", "Yarmolenko", "yarmolenko@com.ua","+14785693258"),
    new UserConst(7, "Olexiy","Buryak", "buryak@com.ua", "+3098522546983"),
    new UserConst(8, "Vitaliy", "Buyalskiy", "buyalskyy@mail.com", "+380957896543"),
    new UserConst(9,"Oleh", "Gusev", "gusev@com.ua", "+38068523636412"),
    new UserConst(10,"Olexander", "Shovkovskiy", "shovkovskiy@com.ua", "+1111111111111")
];

console.log(usersNewArr.sort((a, b) => b.id - a.id));