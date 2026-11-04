
// let myString : string = " Hero"
// let myNumber : number = 344758

// let myBoolean : boolean = true

// let mySymbol : symbol = Symbol()
// let myBigInt : bigint = 100n

// const addTwo = (a : number,b : number) => {
//     return a + b
// }
// console.log(addTwo(10,20))

const addtwo = (a :number, b:number) : number =>{
    return a + b
}
console.log(addtwo(70,20))

// Type Array and Tuple

const arr: string[] =["Typescript", "Hello","25364", "false"]
const arr2 : Array<string> =['Hello','DaudBD']
const numArr: number[] = [1,2,3,4,5,6,67,7]

const dhakaLateLong : readonly [number,number] = [23.45,34.56]


// Optional Default rest Parameters

const concatName = (firstName: string, lastName: string) => {
    if (!lastName) {
        return firstName;
    }

    return firstName + " " + lastName;
}

console.log(concatName("Arif", "Daud"));

const addNumber = (num1:number,num2:number) => {
    return num1+num2;

}
console.log(addNumber(10,20));