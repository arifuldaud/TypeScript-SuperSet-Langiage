

let names: (string | number | boolean)[] = [
    "12",
    "14",
    "15",
    "Adiyan",
    "Sharmin",
    "Ariful",
    "Daud",
    true,
    1,
    45
];

console.log(names);
console.log(names[1]);


// Basic Project 
type student = {
    id: number;
    name: string;
    age : number
};

let students: student[] =[
    {
id:1,
name :"Arif",
age:20
},    {
id:2,
name :"Daud",
age:20
    
}
];
// সব Student দেখানো
students.forEach(function(student) {
    console.log(student.name);
});

// নতুন Student যোগ
students.push({
    id: 4,
    name: "Rahim",
    age: 19
});

// শুধু ১৮ বছরের বেশি Student
let adults = students.filter(function(student) {
    return student.age >= 18;
});

console.log(adults);

// মোট Student সংখ্যা
console.log(students.length);
console.log(students)

