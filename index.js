const express = require('express');
const app = express();

app.get('',(req,resp)=>{
    resp.send('<h1>first page</h1>');
})

app.get('/about',(req,resp)=>{
    resp.send('<h1>about page</h1>');
})

app.get('/profile',(req,resp)=>{
    resp.send('<h1>profile page</h1>');
})

app.listen(5000)