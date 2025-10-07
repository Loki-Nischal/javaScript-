// //an object is a collection of key value pairs
// //use to create complex data structure

// const userinfo ={
//     id:101,
//     username:"nischal",
//     password:"asdf",
//     age:22,
//     isverified:false,
//     address:{
//         country:"nepal",
//         city:"kathmandu",
//         zip:3309

//     }
// }

// //accessing object property
// console.log("Username:",userinfo.username)
// console.log("Age:",userinfo["age"])

// //adding new property
// userinfo.email ="abc@gmail.com"
// console.log(" object:",userinfo)

// //updating property
// userinfo.age = 23
// console.log("updated Object:",userinfo)

// //deleting property
// delete userinfo.isverified
// console.log("updated Object:",userinfo)

//array of objects
const users = [
    {id:303,username:"nischal",age:22},
    {id:304,username:"prabesh",age:22},
    {id:305,username:"dhami",age:22},
    {id:306,username:"sumit",age:22},
    {id:307,username:"pawan",age:22}
    
]

// console.log("first user:",users[0])


for(let user of users){
    console.log(`ID: ${user.id},Username: ${user.username} and Age: ${user.age}`)
}