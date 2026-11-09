

function printValue(value: string | number) {
 if (typeof value === "string") {
    console.log(value.toUpperCase());
 } else {
    console.log(value.toFixed(2));
 }
}

printValue("Hello")

printValue("2345")

let userName: string | number = "Ariful";

if (typeof userName === "string") {
    console.log("This is a String");
} else {
    console.log("This is a Number");
}

function calCulate(value: string | number) {
    if (typeof value === "number") {
        return value * 2;
    }  {
return value.length;
    }
}
console.log(calCulate(7));

function checkValue(value: string | number) {

    if (typeof value === "string") {
        console.log("This is a String");
    } else {
        console.log("This is a Number");
    }

}

checkValue("Ariful");
checkValue(100);


function getLength(value: string | number) {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value.toString().length;
    }
}

console.log(getLength("Ariful"));
console.log(getLength(12345));

function checkArray(value: string | string[]) {
    if (Array.isArray(value)) {
        console.log("This is an Array");
    } else {
        console.log("This is a String");
    }
}

checkArray("Hello");
checkArray(["Apple", "Banana"]);

// Instance Of 
class Car {
    drive() {
        console.log("Car is driving");
    }
}

class Bike {
    ride() {
        console.log("Bike is riding");
    }
}

function checkVehicle(vehicle: Car | Bike) {
    if (vehicle instanceof Car) {
        vehicle.drive();
    } else {
        vehicle.ride();
    }
}

checkVehicle(new Car());
checkVehicle(new Bike());


class Car1 {
    brand = "Toyota";
}

class Bike1 {
    brand = "Yamaha";
}

let myCar = new Car1();

console.log(myCar instanceof Car1);
console.log(myCar instanceof Bike1);


class teachers {
    tech(){
        console.log("Tech Leraning");
    }
}

class studs {
    techy (){
        console.log("Tech is Over")
    }
}

function Checks(person: teachers | studs){
    if(person instanceof teachers){
       person.tech();
    } else {
        person.techy();
    }
}

Checks(new teachers());
Checks(new studs());

// Conditional Type 

type Check<T> = T extends string? "Yes" : "No"

type result1=Check<string>

type result2=Check<string>

type Result<T> = T extends string ? string : number;

function getValues<T>(value: T): Result<T> {
    return (typeof value === "string" ? value : 100) as Result<T>;
}

let a = getValues("Hello");
let b = getValues(50);