

function display<T>(value:T):T {
    return value;
}

console.log(display<string>("Ariful"))
console.log(display<number>(45))
console.log(display<boolean>(true))

function display1<T>(value: T): T {
    return value;
}

console.log(display1("Ariful"));
console.log(display1(500));


function getFirst<T>(items:T[]):T {
    return items[0], items[1]
}

console.log(getFirst<string>(["Ariful","Daud","Adiyan"]))


function pair<T, U>(first: T, second: U) {
    return {
        first,
        second
    };
}

console.log(pair<string, number>("Ariful", 25));