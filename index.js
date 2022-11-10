const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname,"public_page")
// app.use(express.static(publicPath));

const reqFilter = (req , resp , next)=>{
    if(!req.query.age){
        resp.send('please provide age')
    }
    else if(req.query.age < 18){
        resp.send('you cannot access this site')
    }
    else {
        next()
    }
}

app.use(reqFilter)

app.get("",(req,resp)=>{
    resp.send("index page")
})

app.get("/user",(req,resp)=>{
    resp.send("user page")
})


app.listen(5000)
