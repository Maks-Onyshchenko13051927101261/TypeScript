// Є масив coursesArray
// Створити для кожного елементу масиву свій блок,
// блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці img
type coursesArrayModulesType = string[];
type coursesArrDurationType = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: coursesArrayModulesType
};
let coursesArrDuration: coursesArrDurationType[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const course of coursesArrDuration) {
    const divCourse:HTMLDivElement = document.createElement("div");
    divCourse.classList.add('container');
    const titleCourse:HTMLHeadingElement = document.createElement("h2");
    titleCourse.innerText = course.title;
    titleCourse.classList.add('title');
    const courseMonth:HTMLSpanElement = document.createElement("span");
    courseMonth.innerText = `Months: ${course.monthDuration}`;
    const courseHour:HTMLSpanElement = document.createElement("span");
    courseHour.innerText = `Hours: ${course.hourDuration}`;
    const listModule:HTMLUListElement = document.createElement("ul");
    listModule.classList.add('list');
    for (const module of course.modules) {
        const itemModule:HTMLLIElement = document.createElement("li");
        itemModule.innerText = `${module}`;
        listModule.appendChild(itemModule);
    }

    divCourse.append(titleCourse, courseMonth, courseHour, listModule);
    document.body.appendChild(divCourse);
}