// // local_storage -> a web storage api that lets websites to store samll data on the user's browser
// // with no expiration time

const users = [
    {id:99,username:"nischal",age:22},
    {id:100,username:"prabesh",age:23},
    {id:101,username:"dhami",age:24},
    {id:102,username:"mote",age:25},
]

// // adding data to local storage
// // to store we shound convert data into json format
const jsonData = JSON.stringify(users)
localStorage.setItem("key",jsonData)

// // //getting data from localStorage
const data = localStorage.getItem("key")
const parsedData = JSON.parse(data)

console.log(data)
console.log(parsedData)

 //remove data from local storage
 localStorage.removeItem("key")// remove specific key

// // //clear local storage
 localStorage.clear()// remove all keys from local storage


const todos = [
    { id: 101, title: "Buy Groceries", description: "Purchase milk, eggs, and bread from the supermarket." },
    { id: 102, title: "Finish Assignment", description: "Complete the JavaScript homework before tonight." },
    { id: 103, title: "Workout", description: "Do 30 minutes of cardio and 15 minutes of stretching." },
    { id: 104, title: "Read Book", description: "Read two chapters of 'Atomic Habits' before bed." },
];

todos.forEach(todo => {
  // console.log(item)
  const todoContainer = document.getElementById('todo_container') //kun html element access garne bhanera gareko

  const todoDIv = document.createElement('div')//create div element in html
  todoDIv.classList.add('todoDIv')// add todoDIv style to above div from style file


  todoDIv.innerHTML = `
     <h4 class="todo_title"> ${todo.title} <h4>
     <p class ="todo_description"> ${todo.description} </p>
  
    `

  todoContainer.appendChild(todoDIv)// it keeps the div in html page
})