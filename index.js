const fs = require('fs');
console.log(">>",__filename)
// fs.writeFileSync("helloWorld.txt","hello world")
fs.appendFileSync("helloWorld.txt"," , hello world")
fs.readFile("helloWorld.txt",function(err,data){
    console.log(data);
})
fs.readFile("helloWorld.txt","utf8",function(err,data){
    console.log(data);
})