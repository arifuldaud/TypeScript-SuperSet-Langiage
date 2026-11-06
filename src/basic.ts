

export let canFly : boolean = true;

let amount: number = 4040;

let fullName: string = "Arif"

let snacks :string  [] = ["Arif","Daud","Adi"]

type  Grade = "A" | "B" | "C" | "D" // Literals Type

let g: Grade = "C"


type student = {
    id:number
    readonly name:string
    age: number
    roll:number
    class?: string
}

const s1:student ={
    id: 23,
    name: "Daud",
    age: 33,
    roll:1212,
    class: "Seven"
}


const s2:student ={
    id: 23,
    name: "Daud",
    age: 33,
    roll:1212,
}

// s1.name ="Rakib"
// console.log(s1.name)


type hasName ={name:string}

type hasRoll ={roll: number}

type hasFee = {fee: number}

type fullStudent = hasName & hasRoll & hasFee & {grade: Grade}

const fulls: fullStudent ={
    name: "Arif",
    roll : 22,
    fee : 500 ,
    grade : "C"
}

type bKashPay = {
    method: "bkash";
    number: number;
};

type cardPay = {
    method: "card";
    cardNo: number;
    cvc: number;
    exp: number;
};

type cashPay = {
    method: "cash";
};

type payment = bKashPay | cardPay | cashPay;

function pay(p: payment) {

    if (p.method === "bkash") {
        console.log(`Send to bKash Number ${p.number}`);
    }

    else if (p.method === "card") {
        console.log(`Send to Card Number ${p.cardNo}`);
    }

    else {
        console.log("Pay Cash");
    }
}

// Payment Examples
pay({
    method: "bkash",
    number: 1712345678
});

pay({
    method: "card",
    cardNo: 123456789,
    cvc: 123,
    exp: 2028
});

pay({
    method: "cash"
});

function greet(name: string, mood?: string) {
    console.log(`${name} is ${mood ?? "Okay"}`);
}

greet("Arif", "Happy");
greet("Daud");