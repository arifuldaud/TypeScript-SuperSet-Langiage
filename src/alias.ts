import { Empolyee } from './object';


type study ={
    name :string,
    age :number,
    city:string
};

let study1:study ={
    name:"Ariful",
    age :30,
    city : "dhaka"
};


let study2:study ={
    name:"Adiyan",
    age :30,
    city : "ctg"
};

console.log(study2);

console.log(study1);


interface user {
    name :string,
    id: number,
    isActive: boolean
}

let user1: user ={
    name:"Arif",
    id :25,
    isActive:true
}

console.log(user1)

type ID = string | number;

let userId: ID = 101;
let productId: ID = "P100";

console.log(userId);
console.log(productId);

interface Employee {
    name: string;
    salary: number;
    city?: string;
}

interface EmployeeDetails extends Employee {
    company: string;
}

let employee: EmployeeDetails = {
    name: "Adiyan",
    salary: 30000,
    city: "Dhaka",
    company: "ITC"
};

console.log(employee);
console.log(employee.company);

let usersId: string | number;

usersId = 101;
console.log(userId);

usersId = "BD101";
console.log(userId);


let value: string | number | boolean;

value = "Ariful";
console.log(value);

value = 25;
console.log(value);

value = true;
console.log(value); 

function display(value:string | number){
    console.log(value);
}
display("Ariful")

// let age: string | number = 25;

// if (typeof age === "string") {
//     console.log(age.());
// } else {
//     console.log(age.toFixed(2));
// }