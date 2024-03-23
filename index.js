require('dotenv').config()
const express = require('express')
const { MongoClient, ServerApiVersion} = require('mongodb')
const uri = process.env.MONGODB_URI
const app = express()

app.use(express.static('public'))
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  await client.connect();
  app.listen(process.env.PORT || 3000)
  console.log("You successfully connected to MongoDB!");
}
run().catch(console.dir);


app.get('/', function(req, res) {
    res.send('<h1>It is working. Go to "/users" route to fetch users</h1>') 
})

app.get('/users', async(req, res) => {
    try {
      // Send a ping to confirm a successful connection
      const database = client.db("cyclic_users") // .command({ ping: 1 });
      const collection = database.collection('users')

      const users = collection.find()
      res.json(users)
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
})


