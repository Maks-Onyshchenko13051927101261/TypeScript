// #jeBqHV525U5
type coursesOfArrayType = {title: string, monthDuration: number};
let coursesOfArray:coursesOfArrayType[] = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4}
];

for (const course of coursesOfArray) {
    const divCourse:HTMLDivElement = document.createElement("div");
    // divCourse.innerText = course.title + " " + course.monthDuration;
    divCourse.innerText = `${course.title} ${course.monthDuration}`;

    document.body.appendChild(divCourse);
}