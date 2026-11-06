

export let data: undefined = undefined;
console.log(data)
let studentName: undefined = undefined;

console.log(studentName);

let studentnames: string | undefined = "Daud"

console.log(studentnames);

function greet(name: string, age?: number) {
    console.log(name);
    console.log(age);
    console.log(`${name} age is ${age ?? 18}`);
}

greet("Arif");