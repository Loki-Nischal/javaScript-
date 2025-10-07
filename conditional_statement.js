// if statement
const age = 19;
if(age >=18){
    console.log("this is if example");
}

// if else condition
if(age>=18){
    console.log("you can drive");
}
else{
    console.log("you can not drive");
}
// ternary operator
// condition ? "true block" : "false block"
 age>=18 ? "you can drive" :"you can not drive"
console.log("result:",age);



//if-else if - else
const grade =75;
if(grade>90){
    console.log("your grade is A+");
}
else if(grade>80){
    console.log("your grade is A");
}else if(grade>70){
    console.log("your grade is B");
}else{
    console.log("you are fail F");
}

//nested if-else
    const isLoggedIn = true;
const role = "guest";
if(isLoggedIn){
    if(role =="admin"){
        console.log("welcom admin");
    }else{
        console.log("welcom user");
    }
}else{
    console.log("you are not logged in:");
}

//if-else with operator
const userAge = 22;
const hasId = true;

if(userAge >=18 && hasId){
    console.log("you can enter club");
}else{
    console.log("Entry denied");
}
