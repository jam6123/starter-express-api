require('dotenv').config()
const { MongoClient, ServerApiVersion} = require('mongodb')
const express = require('express')
const app = express()

app.use(express.static('public'))

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// connect to database
(async function connectDb() {
  try {
    await client.connect();
    app.listen(process.env.PORT || 3000)
    console.log("You successfully connected to MongoDB!");
  } catch (err) {
    console.log(err)
  }
})()

app.get('/', function(req, res) {
    res.send('<h1>It is working. Go to "/users" route to fetch users</h1>') 
})

app.get('/users', async(req, res) => {
    try {
      const database = client.db("cyclic_users") 
      const collection = database.collection('users')
      const users = await collection.find().toArray()
      res.json(users)
    
    } catch(err) {
      console.log(err)
    }
})


