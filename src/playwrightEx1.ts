/*
DataTypes in TypeScript
    string- all text values
    number- all numerical values
    boolean- true/false
    any- any data type (when we get the error we can figureout data types is not proper)
    unknown- ts doesn't know what is the data type of the variable is 
        this will not allow any operation on the variable till ts knows what is the dt
    type narrowing- important 
*/
let browser_name:unknown = "Chrome";
let emp_name:string ='Sindhu';
let comp_name:string =`TCS`;
if(typeof(browser_name)=="string"){
console.log('Name of browser is: ', browser_name.toUpperCase());
}
console.log("employee Name is: "+ emp_name);
console.log("company name is ",comp_name);

let salary:unknown = 150000;
let isEmployeed: boolean = true;
let experience:any ="10 yrs";
//experience= 2500;
console.log(salary);
console.log(isEmployeed);
console.log(experience);

if(typeof(salary)== "number"){
console.log(salary*2);
}