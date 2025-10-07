
// use to print message or output to terminal



// helpful for debugging and checking output
console.log("Hello, World!");

// variable ->used to store data
// let-> can reassign new value to same variable
let name = "Loki";
console.log("the user name is",name);
name = "Thor";
console.log("the user name is",name);

// const-> cannot reassign new value to same variable
const pi = 3.14159;
console.log("the value of pi is",pi);

const email = "abc@email.com";
console.log("the email is",email);

// paila chai var bhanera pani use hunthyo variable declare garna tara aba use hudaina
// var-> can reassign new value to same variable


// rules for naming variables
// 1.Must start with a letter, underscore(_), or dollar sign($)
// 2.case sensitive i.e email and Email are different
// 3. no reserved keywords i.e let, const, var, if, else, for, while etc



// primitive Data type
// 1. string data type -> use to store text data
const city = "Kathmandu";
const country = 'Nepal';
// to find the typeof data type
console.log(typeof city);

const age ="25";//string
console.log(typeof age);

//2 number data type -> use to store numeric data
const number = 25;//number
console.log(typeof number);

//3.boolean data type->true or false
//camel case naming convention
const isLoggedIn = true;
console.log(typeof isLoggedIn);

const isAdmin = false;
console.log(typeof isAdmin);

//4. null data type-> empty value
const empty = null;
console.log(typeof empty);//object

//5. undefined data type-> variable declared but no value assigned
let undef;
console.log(typeof undef);//undefined


//<<<<<<<<<<<<<<<<<< Type casting or type conversion>>>>>>>>>>>>>>>>>>>>>
// converting one data type to another data type
// 1. string to number conversion
let num1 = "100";
console.log(typeof num1);//string
num1 = Number(num1);
console.log(typeof num1);//number

let num2 = "100.55";
// num2 = parseInt(num2);
// console.log("num2 is",num2);//100
// console.log(typeof num2);//number

num2 = parseFloat(num2);
console.log("num2 is",num2);
console.log(typeof num2);//number

// 2. number to string conversion
let id = 123;
console.log("type of id",typeof id);//number
id = String(id);
console.log("now the type of id is",typeof id);//string

// anything to boolean conversion
console.log("String to boolean:",Boolean(""));//false
console.log("String to boolean:",Boolean("Loki"));//true

console.log("number to boolean:",Boolean(0));//false
console.log("number to boolean:",Boolean(123));//true

//using console.log to show output
console.log("the city is "+city+" and the country is "+country);

// tempalate literal (backtick ``)
console.log(`the city is ${city} and the country is ${country}`);