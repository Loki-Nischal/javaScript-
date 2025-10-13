// synchronous -> code runs line by line, each line must finish executung before the next one starts
// asynchronous -> non-blocking execution the program can continue running while waiting for a task(like api call)
// to finish
// console.log("start")
// setTimeout(()=>{
//     console.log("processing")
// },3000)  //kunai pani operation kati second paxi execute huni bhanera 3000ms = 3s paxi execute hunxa
// console.log("end")
// output 
// start
// end
// processing

// fetch -> is a built-in js function to make http request like get,post,put/patch(data update garna),delete to servers using api

// fetch("https://api.escuelajs.co/api/v1/products")// calling api
// .then(response => response.json()) // changing json data into object
// .then(data => console.log(data)) // change bhako data print garca

// async/await
// async -> use to declare an function as asynchronous.... return promise(resolve or reject)
// await -> used inside async function...pause  the execution of the async function untill  it  returns promise

const fetchProduct = async ()=>{
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json() //changing json data into array of object
        console.log(data)
        data.slice(0,11).forEach(element => {
            const productContainer = document.getElementById("product_container")
            const productDiv = document.createElement("div")

            productDiv.innerHTML =`
            <img src ="${element.image}" alt = "${element.title}"/>
            <h4>${element.title}</h4>
            <p>Rs${element.price}</p>
            <button> Add to cart </button>
            `
            


            productContainer.appendChild(productDiv)
            
        });
      } catch (error) {
        console.log(error)
      }
}

fetchProduct()