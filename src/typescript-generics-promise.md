# TypeScript Generics and Promise<T> Explained

## Introduction

Generics in TypeScript help us write code that works with different data types. Instead of creating separate functions for each type, we can use one reusable function. This keeps our code simple, flexible, and type-safe.

## How Do Generics Work?

Generics use a type parameter like T to work with different data types.

## Example Without Generics

```ts
function getValue(value: string): string {
    return value;
}

console.log(getValue("Hello TypeScript"));
```

This function only accepts string values. If we want to use numbers or booleans, we need to create separate functions.

## Example With Generics

```ts
function getValue<T>(value: T): T {
    return value;
}

console.log(getValue<string>("Hello TypeScript"));
console.log(getValue<number>(100));
console.log(getValue<boolean>(true));
```

Here, the same function works with different data types without creating separate functions.

## Type Inference With Generics

TypeScript can also identify the data type automatically without specifying it explicitly.

```ts
function getValue<T>(value: T): T {
    return value;
}

console.log(getValue("Hello TypeScript"));
console.log(getValue(100));
console.log(getValue(true));
```

**Note:** We haven't specified `<string>`, `<number>`, or `<boolean>`. TypeScript automatically identifies the actual type from the argument. This process is called **Type Inference**.

## Understanding Promise<T>

A Promise is a JavaScript object that represents the result of an asynchronous operation. It can either be fulfilled with a value or rejected with an error.

For example:

- Fetching data from an API.
- Loading information from a database.
- Waiting for an asynchronous task to finish.

## Example: Generics With Promise<T>

```ts
async function getData<T>(data: T): Promise<T> {
    return data;
}
async function main() {
    const name = await getData<string>("Arif");
    const age = await getData<number>(25);
    console.log(name);
    console.log(age);
}
main();
```
In this example, `Promise<T>` represents the type of value returned by the asynchronous function. We use `async` and `await` to work with the Promise result more easily.

## Conclusion

Generics make TypeScript code more reusable and type-safe, while `Promise<T>` helps us handle asynchronous results with clear data types. Both concepts are useful when building applications with Node.js and Express.