const {MongoClient} = require('mongodb');
// const MongoDB = require('mongodb').MongoClient  we can use any syntex 
const url = 'mongodb://127.0.0.1:27017';
const database = "e-comm"
const client = new MongoClient(url);

async function dbConnection(){
    let result = await client.connect();
    let db = result.db(database)
    return db.collection('product')        
    // let response = await collection.find({}).toArray()
    // console.log(response)
}

module.exports = dbConnection;
