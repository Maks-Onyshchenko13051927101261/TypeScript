"use strict";
let coursesArrDuration = [
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
    const divCourse = document.createElement("div");
    divCourse.classList.add('container');
    const titleCourse = document.createElement("h2");
    titleCourse.innerText = course.title;
    titleCourse.classList.add('title');
    const courseMonth = document.createElement("span");
    courseMonth.innerText = `Months: ${course.monthDuration}`;
    const courseHour = document.createElement("span");
    courseHour.innerText = `Hours: ${course.hourDuration}`;
    const listModule = document.createElement("ul");
    listModule.classList.add('list');
    for (const module of course.modules) {
        const itemModule = document.createElement("li");
        itemModule.innerText = `${module}`;
        listModule.appendChild(itemModule);
    }
    divCourse.append(titleCourse, courseMonth, courseHour, listModule);
    document.body.appendChild(divCourse);
}
