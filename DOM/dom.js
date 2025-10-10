//dom-> document object model
//it interacts with html elements on webpage
//can select,change add or remove HTMl elements

// const heading = document.getElementById("heading")




// //event handling 
// const btn = document.getElementById("btn")

// btn.addEventListener("click",function(){
//  heading.innerText="It can access h1 heading "
//  heading.style.color="purple"
//  heading.style.backgroundColor="black"
// })


//counter app
let count = 0;

const result = document.getElementById("result")

//increment function
const increment =()=>{
    count++;
    result.innerText = count;
}

const substract =()=>{
    if(count===0){
        alert("can not go below ")
        return false//it doesnot let to go in (-) digit
    }

    count--;
    result.innerText=count;
}

const reset =()=>{
    count =0;
    result.innerText=count;
}