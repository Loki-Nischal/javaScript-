// rest operator(...) -> use to collect multiple elements like array items,object items
//  or arguments into a single variable
//opposite of spread -> instead of expanding it gathers

//rest in array
const numbers = [10,20,30,40,50,60,70,80,90]
const [first,second,...rest] = numbers
//first = 10
//second = 20
//rest of the number rest = 30,40,50,60,70,80,90
console.log("Rest",rest)

//rest in object
const user = {
    id:101,
    username:"john",
    age:25,
    password:"123@kjdsbf"
}
const {password,age,...restObject} = user
console.log("Rest info ",restObject)

// rest operator with function argument

const sum =(...numbers)=>{
    const total = numbers.reduce((acc,value) => acc + value,0)
    console.log("Total",total)
}

sum(10,20)//output [ 10, 20 ] //numbers are converted into array
sum(11,22,89,45)//output [ 11, 22, 89, 45 ]

const cart =(customer,...Items)=>{
    console.log("Customer name:",customer)
    //console.log("Items:",Items)//output Items: [ 'product 1', 'product 2', 'product 3' ]
    console.log("Items:",Items.join(", "))//output Items: product 1, product 2, product 3
}

cart("nischal","product 1","product 2")
cart("loki","product 1","product 2","product 3")