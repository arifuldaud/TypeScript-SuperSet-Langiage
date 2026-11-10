

async function validateAgeAsync(age:number): Promise<string> {
   
   if (age >=18) {
    await new Promise(resolve =>setTimeout(resolve,1000));
         return "Access Granted";
    }
   
    if(age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }
  return "";
}