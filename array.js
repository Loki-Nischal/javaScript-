// array -> it is used to store multiple data 





const fruits =["apple","mango","banana","orange"];
const number =[10,20,30,40];
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

//foreach
fruits.forEach(element => {
    console.log("fruits:",element)
    
});