"use strict";
class UserConstructor {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let arrNewUsers = [
    new UserConstructor("1", "Volodymyr", "Dantes", "dantes@com.ua", "+380585222546"),
    new UserConstructor("2", "Olexiy", "Durnev", "durnev@com.ua", "+152368741558"),
    new UserConstructor("3", "Vlad", "Kuran", "kuran@mail.com", "+1987654322"),
    new UserConstructor("4", "Volodymyr", "Brazhko", "brazhko@com.ua", "+30504567892"),
    new UserConstructor("5", "Vlad", "Vanat", "vanat@com.ua", "+39875225897"),
    new UserConstructor("6", "Andriy", "Yarmolenko", "yarmolenko@com.ua", "+14785693258"),
    new UserConstructor("7", "Olexiy", "Buryak", "buryak@com.ua", "+3098522546983"),
    new UserConstructor("8", "Vitaliy", "Buyalskiy", "buyalskyy@mail.com", "+380957896543"),
    new UserConstructor("9", "Oleh", "Gusev", "gusev@com.ua", "+38068523636412"),
    new UserConstructor("10", "Olexander", "Shovkovskiy", "shovkovskiy@com.ua", "+1111111111111")
];
console.log(arrNewUsers.filter(user => Number(user.id) % 2 === 0));
