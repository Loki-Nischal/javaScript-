//higher order function-> function that take another function as argument(callback)

const sayHello =(callback)=>{
    console.log("Hello")
    callback()//invoke sayGoodbye function
}

const sayGoodbye =()=>{
    console.log("Goodbye")
}

sayHello(sayGoodbye)


const fruits =["apple","mango","banana","orange"]
//forEach -> use to iterate items of array
fruits.forEach(function(item){
    console.log(item)
})
//arrow function
fruits.forEach((item) =>  console.log(item))
  
//map -> use callback and transform each element in an array and return new array