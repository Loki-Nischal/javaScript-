// //loop -> let you run the block the code multiple time



// // for loop 
// for(let x = 1;x<6;x++){
//     console.log("Count:",x);
// }

// let i =1;
// while ( i<=10) {
   
//     console.log("Count",i);
//     i++;
    
// }

// // do while runs atleast once
// let x = 11
// do {
//     console.log("count",x);
//     x++
// } while (x<=10);

//user ko input lina prompt use hunxa
let username="";
let password="";

while(username !=="admin" || password !=="admin"){
   username = prompt("Enter your username");
   password = prompt("enter your password");

   if(username !=="admin" || password !=="admin"){
    console.log("Invalid Credentials");
   }
}

console.log("Login Successful");