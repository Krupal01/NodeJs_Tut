const express = require('express');
const app = express();
const path = require('path');
const reqFilter = require('./middle_ware')
const route = express.Router();

const publicPath = path.join(__dirname,"public_page")
// app.use(express.static(publicPath));


// app.use(reqFilter)
route.use(reqFilter)

app.get("",(req,resp)=>{
    resp.send("index page")
})

app.get("/user",(req,resp)=>{
    resp.send("user page")
})

route.get("/about",(req,resp)=>{
    resp.send("about page")
})

route.get("/other",(req,resp)=>{
    resp.send("other page")
})

app.use('/',route)
app.listen(5000)
