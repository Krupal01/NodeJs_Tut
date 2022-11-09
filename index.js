const express = require('express');
const app = express();

app.get('',(req,resp)=>{
    resp.send("<h1>first page , welcom</h1>"+req.query.name);
})

app.get('/about',(req,resp)=>{
    resp.send('<h1>about page</h1>');
})

app.get('/profile',(req,resp)=>{
    resp.send('<h1>profile page</h1>');
})

app.listen(5000)