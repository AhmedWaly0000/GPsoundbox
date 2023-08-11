

const {MongoClient} = require('mongodb');

// Connect URL
const url = 'mongodb://localhost:27017'

const client = new MongoClient(url);
async function run() {
    try {
        await client.connect()
        console.log("Connected to database")
       var data =  await client.db("test").collection("abc").find().toArray()
         await client.db("test").collection("abc").insertOne({id:4})
       
       await client.db("test").collection("abc").deleteOne({id:4})

       await client.db("test").collection("abc").updateOne({id:4})

       
      

       console.log(data)

       db.



        await client.close()
        console.log("Closed the connection")

    } finally {

    }
}



run()

// Connect to MongoDB
// MongoClient.connect(
//   url,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   },
//   (err, client) => {
//     if (err) {
//       return console.log(err)
//     }

//     // Specify the database you want to access
//     const db = client.db('school')

//     console.log(`MongoDB Connected: ${url}`)
//   }
// )