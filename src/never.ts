

function errorMessage(): never {
    throw new Error("something Went wrong")
    
}

errorMessage()


type payment = "card" | "bkash" | "cash"

function pay (method:payment) {
    switch(method) {
    case "card":
        console.log("pay with card");
        break;
case "bkash":
        console.log("pay with bkash");
        break;
case "cash":
        console.log("pay with cash");
        break;

        default:
            const check:never = method
            return check;

    }
}