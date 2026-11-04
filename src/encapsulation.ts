class Empolyees {
    constructor(public name: string,
    private _baseSalary: number) 
    {}

    // {
    //     this.name = name;
    //     this.baseSalary = baseSalary;
    // }

get baseSalary(): number {
   return  this._baseSalary;
} 

set baseSalary(newSalary : number) {
   this._baseSalary= newSalary;
}
}
const empolyee2 = new Empolyees('Arif', 4500);
const empolyee3 = new Empolyees("ariful", 4000);

empolyee2.baseSalary=5000;
console.log(empolyee2);
console.log(empolyee3);