const getPromise = () =>{
    return new Promise((resolve,reject)=>{
        console.log(" i am promise");
        resolve("success")
    })
}

let promise = getPromise();
promise.then((res)=>{
    console.log("primise fulfilled",res)
})

promise.catch((err)=>{
    console.log("Rejected",err)
})