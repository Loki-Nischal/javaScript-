//spread operator(...) -> used to expand element of array or object into individual elements
// use to copy,merge or pass array/object element easily

//spread operator in array
//1. expanding array
const arr = [1,3,6,8]
console.log("Expanding Array:",...arr)
//output Expanding Array: 1 3 6 8

//2. copying array
const copyArray = [...arr]
console.log("copied array:",copyArray)
// output copied array: [ 1, 3, 6, 8 ]


//3. merging two array
const fruits =["apple","mango","banana"]
const more_fruits =["dragon fruits","blue berry"]

const mergedArray = [...fruits,...more_fruits]
console.log("Merged Array",mergedArray)
//output Merged Array [ 'apple', 'mango', 'banana', 'dragon fruits', 'blue berry' ]


//spread operators for objects
const user = {
    id:101,
    username:"john",
    age:25
}

//copying object
const copyUser = {...user}
console.log("copied object:",copyUser)
// output copied object: { id: 101, username: 'john', age: 25 }

//merging two object
const userInfo = {
    email:"i@gmail.com",
    isVerified: false
}

const mergeUserInfo = {...user,...userInfo}
console.log("Merged Object:",mergeUserInfo)
// output Merged Object: 
//{
//   id: 101,
//   username: 'john',
//   age: 25,
//   email: 'i@gmail.com',
//   isVerified: false
// }