
# TypeScript Generics and Promise<T> Explained

## Introduction:

Generics in TypeScript help us write code that can work with different data types. Instead of creating separate functions for each type, we can use one reusable function. This keeps our code simple, flexible, and type-safe.

## How Do Generics Work?

Generics allow us to use a type parameter like `T` instead of fixing a specific data type. TypeScript determines the actual type when we call the function.


# Example Without Generics 

```ts
function getValue(value: string): string {
    return value;
}

console.log(getValue("Hello TypeScript"));
```

## Example With Generics 

```ts
function getValue<T>(value: T): T {
  return value;
}
console.log(getValue<string>("Hello TypeScript"));
console.log(getValue<number>(100));
console.log(getValue<boolean>(true));
```


## Understanding Promise<T>

A `Promise<T>` represents a value that will be available after an asynchronous operation finishes. The `T` tells TypeScript what type of result to expect.

For example:

```ts
interface User {
  id: number;
  name: string;
}

async function getUser(): Promise<User> {
  const response = await fetch("/api/user");

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json() as Promise<User>;
}
```

In this example, `Promise<User>` tells TypeScript that the function returns a Promise containing User data. We use `async` and `await` to handle the API request without writing complicated Promise chains.

Remember, TypeScript does not automatically validate API data at runtime.

## Conclusion

Generics make TypeScript code more reusable and type-safe, while `Promise<T>` helps us manage asynchronous results with clear types. Both concepts are especially useful when building backend applications with Node.js and Express.