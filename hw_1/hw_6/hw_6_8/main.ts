type courseDurationType = { title: string, monthDuration: number };
const coursesAndDurationArr: courseDurationType[] = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4}
]
type coursesType = { id: number, title: string, monthDuration: number }
let courses: coursesType[] = coursesAndDurationArr.sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value: courseDurationType, index: number): coursesType => ({...value, id: index + 1}));

console.log(courses);

