

let value:unknown = "Hellow TypeScript";
let result1 = value as string

console.log(result1)

console.log(result1.toUpperCase());

// Anglel Braket Casting Used 

let values: unknown = 786;

let answer = <number>values

console.log(answer)
console.log(answer.toFixed(2));


let number:unknown = 12345;

let my = number as number 

console.log(my.toFixed(3))


let value1 = "100";

let result2 = Number(value1);

console.log(result2);
console.log(typeof result2);


let value4: unknown = 100;

if (typeof value4 === "string") {
    console.log(value4.toUpperCase());
} else {
    console.log("This is not a string");
}