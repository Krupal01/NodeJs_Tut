const dbConnection = require('./mongodb')

async function main(){
    const data = await (await dbConnection()).find({}).toArray()
    console.log(data)
}

main()