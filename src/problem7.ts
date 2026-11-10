

class Empolyee {
    protected name :string;
    private baseSalary: number;
 constructor(name:string,baseSalary:number) {
    this.name = name ;
    this.baseSalary = baseSalary;
 }
getDetails():string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
}
}

class Manager extends Empolyee {
 private department: string;
 constructor(name:string,baseSalary:number,department:string) {
    super(name,baseSalary);
    this.department =department;
 }
 getRoleInfo() : string {
    return `Manager of ${this.department}: ${this.name}`
 }
}