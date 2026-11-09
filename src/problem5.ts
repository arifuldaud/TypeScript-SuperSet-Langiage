
interface Course {
    title:string;
    students:number;
    isPublished: boolean
}

function getPopularCourses(courses:Course[] , minStudents:number) :Course[] {
    return courses.filter(course => course.isPublished && course.students >= minStudents);
};
const courses: Course[] = [
    { title: "TypeScript", students: 100, isPublished: true },
    { title: "React", students: 80, isPublished: true },
    { title: "JavaScript", students: 150, isPublished: false },
    { title: "Node.js", students: 120, isPublished: true }
];

console.log(getPopularCourses(courses, 100));