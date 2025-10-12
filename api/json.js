//JSON -> javascript object notation
// a lightweight format for storing and exchanging data between client and server
//json support all language 
const user ={
    id:101,
    username:"nischal budhathoki",
    age:22
}

//changing object to json 
const jsonData = JSON.stringify(user)
console.log(jsonData)// output '{"id":101,"username":"nischal budhathoki","age":22}' yautai lamo string ma change gardinxa

//changing json data to object
const parsedData = JSON.parse(jsonData)
console.log(parsedData)// output { id: 101, username: 'nischal budhathoki', age: 22 }