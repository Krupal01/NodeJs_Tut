const express = require('express')
const dbConnection = require('./mongodb')
const mongoDb = require('mongodb')

const app = express();
app.use(express.json())

app.get('/',async(req,resp)=>{
    const data = await (await dbConnection()).find({}).toArray()
    resp.send(data)
})

app.post('/',async(req,resp)=>{
    const data = await (await dbConnection()).insertOne(req.body)
    resp.send(data)
})

app.put('/',async(req,resp)=>{
    const data = await (await dbConnection()).updateOne(
        {name:req.query.name},
        {$set:req.body}
    )
    resp.send(data)
})

app.delete('/',async(req,resp)=>{
    const data = await (await dbConnection()).deleteOne({name : req.query.name})
    // const data = await (await dbConnection()).deleteOne({id : new mongoDb.ObjectId(req.query.id)})
    resp.send(data)
})

app.listen(5000)

