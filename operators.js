// operators -> they are special symbols or keyword that perform actions and 
//athematic operators
let a = 10;
let b = 5;
console.log("a + b =",a+b);

console.log("a - b =",a-b);

console.log("a * b =",a*b);

console.log("a / b =",a/b);

console.log("a % b =",a%b);//modulus operator->gives the remainder

console.log("a ** b =",a**b);//exponentiation operator->gives the power

console.log("++a =",++a);//pre increment-> first increment the value then use it
console.log("a++ =",a++);//post increment-> first use the value then increment it
console.log("a after post increment",a);

console.log("--b =",--b);//pre decrement-> first decrement the value then use it
console.log("b-- =",b--);//post decrement-> first use the value then decrement it
console.log("b after post decrement",b);

// assignment openerators
let c = 10;
c +=5;//c=c+5
console.log("c after +=5",c);

let d = 20;
d-=5;//d=d-5
console.log("d after -=5",d);
// *=,/=,%=,**=

// comparison operators -> they compare two values and return boolean value(true or false)
let x = 10;
let y = 5;
let z = 15;
console.log("x > y is",x>y);

//greater then and equal to
console.log("greater then and equal to:", x>=y);

//less than and equal to
console.log("less then and equal to:",x<=y);

//equal to //check only value
console.log("x is equal to y",x==y);
x =10;
y="10";
console.log("x is equal to y",x==y);

//strickly equal to === ckeck both vaule and data type
x=10;
y="10";
console.log("x is equal to y",x===y);

//not equal to -> != -> ckeck only value
console.log("Not equal",x!=z);
console.log("Not equal",x!=y);

//not equal to -> !== -> ckeck both value and data type
console.log("Not equal",x!==z);
console.log("Not equal",x!==y);

//logical operators returns true or false value
//and operators -> &&
//return true if all condition is true else return false

const isAdmin=true;
const isLoggedIn=true;
const isVerified=false;

console.log("And operation 1:",isAdmin && isLoggedIn);
console.log("And operation 2:",isAdmin && isLoggedIn && isVerified);

// Or operator->||
// return false if all condition is false or return true
console.log("Or operation 1:",isAdmin||isLoggedIn);  
console.log("Or operation 2:",isAdmin||isLoggedIn ||isVerified);  

//not operator -> !
// change true to false and vise-versa
console.log("Not operation 1:",!isAdmin);
console.log("Not operation 1:",!isVerified);




