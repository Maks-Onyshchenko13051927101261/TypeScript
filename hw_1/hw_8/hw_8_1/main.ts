type CoursesArrayType = { title: string, monthDuration: number };
let coursesDurationArr:CoursesArrayType[] = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4}
];
type IdCoursesType = CoursesArrayType & { id: number };
console.log(coursesDurationArr.map((courses, index):IdCoursesType => ({id: index + 1, ...courses})));