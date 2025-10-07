// function is the reusable block
function display(){
    console.log("hello mf");
}

display();

// function with argument
function displaySum(a,b){
     console.log("the sum is",a+b);
}

displaySum(5,5);

//funtion with return type
function cal(a){
    const sq = a*a;
    return sq;
}

const value = cal(10)+10;
console.log("square is "+value+" FU");

//function with default argument
//kunai parameter pass garena bhane chai default value use hunxa
function calPrice(price=100,discount=0.05){
    const totalPrice = price - (price*discount);
    return totalPrice;
}
console.log("the price after discount",calPrice());


// Arrow function
// one line of code xa bhane yautai line ma code rakha milo curly braket hatauna milyo
const sayHello = () => console.log("hello js");
//function bhanda tala nai call garnu peryo function bhanda mathi call garna mildaina
sayHello();


//Arrow function with return type
// one line of code cha bhane return ra curly braket rakhna perena
const calMul =(a,b)=>   a*b;

console.log("the value of multimly vaue is",calMul(10,20));