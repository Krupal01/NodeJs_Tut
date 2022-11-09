console.log("first log")

let data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

data.then((data)=>{
    console.log(data)
})
console.log("third log")
