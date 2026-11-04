
class Empolyee {
    name :string;
    baseSalery: number;

constructor(name:string,baseSalery:number){
this.name= name;
this.baseSalery= baseSalery;
}
}

const empolyee = new Empolyee ('Arif',40000);
const empolyee1 = new Empolyee ("Mir",50000);

console.log(empolyee)
console.log(empolyee1)
console.log(empolyee instanceof Empolyee)
console.log(empolyee1 instanceof Empolyee)

class Student {
    name:string;
    id: number;
    constructor(name:string,id:number){
        this.name = name;
        this.id= id;
    }
}

const student = new Student ("Adiyan",56)
const student1 = new Student ("Arif",45)

console.log(student)
console.log(student1)