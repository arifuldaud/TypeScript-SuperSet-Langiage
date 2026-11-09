

 function processInput(value:string | number | boolean) : string | number {
    if (typeof value === "string"){
        return value.trim().toLowerCase();
    }  
        if(typeof value ==="number") {
            return value * 10;
        } if(typeof value ==="boolean"){
           
         return value? "Active" : "Inactive";
        }
         return "";
    }
 

 // Sample Input:
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));