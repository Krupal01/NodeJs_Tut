const express = require('express');
const app = express();
const path = require('path');
const reqFilter = require('./middle_ware')

const publicPath = path.join(__dirname,"public_page")
// app.use(express.static(publicPath));


// app.use(reqFilter)

app.get("",(req,resp)=>{
    resp.send("index page")
})

app.get("/user",reqFilter,(req,resp)=>{
    resp.send("user page")
})


app.listen(5000)
