
export type Toppings = "chees" | "olive" | "corn";

type Pizza = {
    name: string;
    toppings: Toppings[];
};

// Single Pizza
const p1: Pizza = {
    name: "Arif",
    toppings: ["chees"]
};

// Multiple Pizza Menu
const menu: Pizza[] = [
    {
        name: "pizza 1",
        toppings: ["chees"]
    },
    {
        name: "pizza 2",
        toppings: ["corn"]
    }
];

