
class Empolyee9 {
    constructor(
        public name: string,
        protected _baseSalary: number
    ) {}

    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error('Salary cannot be negative');
        }

        this._baseSalary = newSalary;
    }

    calculatePay(): number {
        return this.baseSalary;
    }
}

class Manager2 extends Empolyee9 {

    override calculatePay(): number {
        return this.baseSalary + 5000;
    }
}

const empolyee9 = new Empolyee9("Arif", 4000);
const manager2 = new Manager2("Daud", 5000);

console.log(empolyee9.calculatePay());
console.log(manager2.calculatePay());
