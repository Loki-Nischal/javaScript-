// destructuring -> extract value from array or object and store them in seperate variable 

//destructuring array
const fruits =["apple","mango","orange"]

// console.log("first item :",fruits[0])

const [first,second,third] = fruits
console.log("first item:",first)
console.log("third item:",third)


//destructuring object
const user = {
    id: 999,
    username: "loki",
    age: 23
};

// console.log("User Id",user.id)
const {id,username,age} = user
console.log("To see id:",id)
console.log("Username:",username)