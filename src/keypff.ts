

interface Student {
    name: string;
    age: number;
    city: string;
}

type StudentKeys = keyof Student;

let key: StudentKeys;

key = "name";
key = "age";
key = "city";

// key = "email"; // Error

console.log(key);


interface st {
    name : string,
    age :number ,
    city :string 
}

function getValue(obj:st,key:keyof st) {
    return obj[key];
}

let sts :st = {
    name :"ariful",
    age : 34,
    city : "dhaka"
}

console.log(getValue(sts,"name"))
console.log(getValue(sts,"age"))
console.log(getValue(sts,"city"))