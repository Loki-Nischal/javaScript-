// array -> it is used to store multiple data 





const fruits =["apple","mango","banana","orange","blue berry","bluch","graps"];
const number =[10,20,30,40,70,80];
// mixed datatype pani rakhna milxa
const mixed_array =["loki",99,false];

//accessing item using index(starts from 0)
console.log("First fruit:",fruits[0])

//length of array
console.log("Length:",fruits[fruits.length-1])

//adding new iteam in array 
fruits.push("graps")
console.log("array after push:",fruits)

//adding item in specific place
fruits.splice(1,2,"guava")
console.log("array :",fruits)

//removing item from array
fruits.pop()//remove item from last position
console.log("Array after pop:",fruits)

//removing item from specific positin
fruits.splice(1,1,"pine apple")
console.log("array after splice:",fruits)

//loops
for(let i =0; i< fruits.length; i++){
    console.log("fruits:",fruits[i])
}

// for  of 
for(let fruit of fruits){
    console.log("Fruits:",fruit)
}

//slice -> copy part of array
const sliced_array =fruits.slice(0,2)
console.log("sliced array:",sliced_array);

//foreach -> use to iterate items of array
fruits.forEach(element => {
    console.log("fruits:",element)
    
});

//fruits.forEach((item)=>console.log(item))

//map -> use callback and transform each element in an array and return new array
//example -> converting each item of fruits array to uppercase

const newArray = fruits.map(item =>
    item.toUpperCase())
 console.log("New array",newArray)


 //converting each item from numbers array 
 const doubledArray = number.map(num => num*2)
 console.log("DoubledArray",doubledArray)

 //filter -> returns new array containing only the elements that pass a given text condition
 const filterFruits = fruits.filter(item => item.startsWith('b'))
 console.log("filtered array",filterFruits)

 //return new array containing number greater than 50
 const numb = number.filter(item => item>50)
 console.log("50 bhanda thulo",numb)

 const users = [
    {id:303,username:"nischal",age:22},
    {id:304,username:"prabesh",age:23},
    {id:305,username:"dhami",age:24},
    {id:306,username:"sumit",age:25},
    {id:307,username:"pawan",age:22}
    
]

//using filter
 const filteruser = users.filter(user => user.age>22)
 console.log("Greater then 22 ",filteruser)

 //using map
 const mapUser = users.map(user => user.username.toUpperCase())
 console.log("Show username in uppercase",mapUser)

 //using foreach-> go through each item 
   users.forEach(user => {
    console.log(`ID: ${user.id} Username:${user.username} and Age:${user.age}`)
 })

 //reduce -> it is used to reduced an array to single value
 const totalNumber = number.reduce((accumulator,value) => {
    return accumulator + value //{} narakhya bhaya return garna pardaina thiyo
 },0) // 0-> initial value of accumulator

 console.log("total:",totalNumber)

 //cart
 const cart =[
    {id:101,name:"product 1",price:100,quantity:2},
    {id:102,name:"product 2",price:200,quantity:3},
    {id:103,name:"product 3",price:1300,quantity:4},
    {id:104,name:"product 4",price:3100,quantity:5}
 ]

 const totalPrice = cart.reduce((acc,value)=> acc + value.price,0)
 console.log("total price",totalPrice)

 const totalQ = cart.reduce((acc,value)=>acc + value.quantity,0)
 console.log("total quantity",totalQ)

 //sorting strings array
 console.log("sorted array",fruits.sort())
 console.log("Reverse sort",fruits.sort().reverse())
 

 //sorting numbers array
 const assSort = number.sort((a,b) => a - b)
 console.log("Assending sort",assSort)

 const dssSort = number.sort((a,b) => b-a)
 console.log("Dss sort",dssSort)

 //find and findIndex -> finds the first matching element or its index

 const findNumber = number.find(item => item === 100)
 console.log("find 10:",findNumber)


 const findNumberIndex = number.findIndex(item => item === 70)
 console.log("Index of 70 is",findNumberIndex)