//variables and datatypes in Typescript
// is a name of the location used to store the data
/* var - (not recommended for Typescript)
   let- used only when the value of the variable is going to change
   const- used only when the value of the variable is not going to change
*/

let emp_id: number =101;// reassignment is possible 
emp_id = 102;
console.log(emp_id);
const company_name:string ='NewCompany';// reassignment is not possible
console.log(company_name);