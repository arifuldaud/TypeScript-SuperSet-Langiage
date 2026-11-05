
// abstract class Empolyee10 {
//     constructor(
//         public name: string,
//         protected _baseSalary: number
//     ) {}

//     get baseSalary(): number {
//         return this._baseSalary;
//     }

//     set baseSalary(newSalary: number) {
//         if (newSalary < 0) {
//             throw new Error('Salary cannot be negative');
//         }

//         this._baseSalary = newSalary;
//     }

//     // Abstract Method
//     abstract calculatePay(): number;
// }

// // Manager Child Class
// class Manager1 extends Empolyee10 {

//     calculatePay(): number {
//         return this.baseSalary + 5000;
//     }
// }

// // Developer Child Class
// class Developer extends Empolyee10 {

//     calculatePay(): number {
//         return this.baseSalary + 2000;
//     }
// }

// // Objects
// const manager2 = new Manager1("Arif", 5000);
// const developer = new Developer("Daud", 4000);

// // Output
// console.log(manager.calculatePay());
// console.log(developer.calculatePay());
