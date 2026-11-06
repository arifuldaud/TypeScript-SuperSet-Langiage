let teacher: unknown = "daud";

teacher = "30";
teacher = true;

teacher = {
    name: "daud",
    age: 30
};

// Type Checking
if (typeof teacher === "string") {
    console.log(teacher.toUpperCase());
} else {
    console.log("Teacher is not a string");
}