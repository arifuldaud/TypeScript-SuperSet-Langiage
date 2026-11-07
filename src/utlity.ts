
// Partial Utlity 
interface Teacher{
    name: string,
    age :number,
    country: string
}

let teacher1: Partial<Teacher> = {
    name:"Ariful",
    age : 32
}
console.log(teacher1)


// Required Ultility 

interface Stw {
    name? : string,
    age? :number,
    city?: string
}

let stw:Required<Stw>={
    name:"Ariful",
    age : 34,
    city: "Dhaka"
}

console.log(stw)

// ReadOnly 

interface Stw1 {
    name : string ,
    age : number,
    city: string
}

let stw1:Readonly<Stw1> = {
  name :"Ariful",
  age : 23,
  city :"Dhaka"
}
//stw1.name ="Arif"
console.log(stw1.name);
console.log(stw1)

// Pick 

interface More {
    name : string,
    age : number ,
    email: string,
    city: string ,
    id : number,
    class: string
}

let more: Pick<More, "name" | "age" | "id"> ={
    name : "Ariful",
    age : 23,
    id : 45
}

console.log(more)

// Omit 

interface Os {
    name : string,
    age : number,
    email: string
}

let os: Omit<Os,"email"> ={
   name: "Adi",
   age : 5
}
console.log(os)


type studentGrade= Record<string,number>

let grades: StudentGrade = {
    Ariful: 90,
    Sharmin: 85,
    Daud: 95
};

console.log(grades);

