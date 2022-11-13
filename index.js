const dbConnection = require('./mongodb')

// async function main(){
//     const data = await (await dbConnection()).find({}).toArray()
//     console.log(data)
// }

// main()

const insert = async () =>{
    const db = await dbConnection()
    const result = await db.insertOne({
        name:"oppo",
        price:520,
        model:"a35"
    })
    console.log(result)

    if (result.acknowledged){
        console.log("data inserted")
    }
}

insert()