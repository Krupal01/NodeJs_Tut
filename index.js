const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname,"public_page")
// app.use(express.static(publicPath));

app.set('view engine','ejs');

app.get('/profile',(req,resp)=>{
    const user = {
        name : 'jack',
        email : 'jack@jack.com',
        skill: ['java','c','python']
    }
    resp.render('profile',{user})
})


app.listen(5000)
