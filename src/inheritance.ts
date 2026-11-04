
class Empolyee5 {
    constructor(
        public name: string,
        protected _baseSalary: number
    ) {}

    // Getter
    get baseSalary(): number {
        return this._baseSalary;
    }

    // Setter with Validation
    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error('Salary cannot be negative');
        }

        this._baseSalary = newSalary;
    }

    // Parent Class Method
    describe(): string {
        return `${this.name} earns $${this.baseSalary}`;
    }
}

// Child Class
class Manager extends Empolyee5 {

    constructor(
        name: string,
        baseSalary: number,
        public teamMemberCount: number
    ) {
        super(name, baseSalary);
    }

    // Manager Work Details
    describeWork(): string {
        return `${this.name} manages ${this.teamMemberCount} team members`;
    }

    // Accessing Protected Property
    describeManagers(): string {
        return `${this.name} earns $${this._baseSalary}`;
    }
}

// Parent Object
const empolyee7 = new Empolyee5("Arif", 4000);

// Child Object
const manager = new Manager("Mixan", 2400, 4);

// Parent Output
console.log(empolyee7.describe());

// Child Output
console.log(manager.describe());
console.log(manager.teamMemberCount);
console.log(manager.describeWork());
console.log(manager.describeManagers());

// Update Salary using Setter
manager.baseSalary = 5000;

console.log(manager.baseSalary);
console.log(manager.describe());
