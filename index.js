const {MongoClient} = require('mongodb');
// const MongoDB = require('mongodb').MongoClient  we can use any syntex 
const url = 'mongodb://127.0.0.1:27017';
const database = "e-comm"
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database)
    let collection = db.collection('product')        
    let response = await collection.find({}).toArray()
    console.log(response)
}

getData()