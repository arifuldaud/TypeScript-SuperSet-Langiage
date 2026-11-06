

function sayHello() {
    console.log("Hello World");
}

sayHello();

function greet(name:string){
    console.log("hello" + name)
}
greet('Arifu');
greet('Sharmin');

function add(a:number,b:number){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}
add(10,5)


function add2(a:number,b:number) : number {
    return a+b;
}

let result = add2(10,8);

console.log(result)

function get(): string {
    return "Ariful"
}

function getNumber(): number {
    return 23
}

function getAge(): boolean{
    return true
}

console.log(getAge())
console.log(getNumber())
console.log(get())

// Void Function 
function message(): void {
    console.log("Welcome to TypeScript");
}

message();

function greet2(name: string, city?: string) {
    console.log(name);
    console.log(city);
}

greet2("Ariful");
greet2("Daud", "Dhaka");

// Default parameter 
function greet3(name: string = "Guest") {
    console.log("Hello " + name);
}

greet3("Ariful");
greet3();
// Arrow Function
const add3 = (a: number, b: number): number => {
    return a + b;
};

console.log(add3(10, 20));