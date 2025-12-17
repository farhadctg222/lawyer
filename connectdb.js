
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cgsbnjt.mongodb.net/?appName=Cluster0`

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
    
//   }
// }
// run().catch(console.dir);


// kHhrzRcatDf9DMMM mongodb password
// application userName

const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

let db;
const Conectdb =  ()=> {

   if(db){
    return db
   }

    try {
      const uri = "mongodb+srv://application:JohBlbp7Su35TFZL@cluster0.fotua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    // Connect the client to the server	(optional starting in v4.7)
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
      });





     db = client.db('LawyerBD')
     return db
    }catch (error){
        console.log(error)
    }
  
}
export default Conectdb;



