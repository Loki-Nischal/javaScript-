function sum(a,b){
    console.log(a+b);
}

function calculator (x,y,sumCallback){
    sumCallback(x,y)
}

calculator(5,5,sum)