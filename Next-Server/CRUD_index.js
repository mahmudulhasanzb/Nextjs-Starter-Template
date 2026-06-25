const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  await client.connect();

  const db = client.db('techmart');
  const productCollection = db.collection('products');

  // Import Routes
  // app.//get, post, patch, delete, update('/products, async (req, res) => {

  // Find all documents
  // const result/products = productCollection.find({}).toArray()

  //send all products
  // res.send(result/products)
  // })


  //Post_index.js
  //Get_All_index.js
  //Get_ById_index.js
  //Update_ById_index.js
  //Delete_ById_index.js

  console.log('✅ MongoDB Connected');
}

run().catch(console.error);

app.get('/', (req, res) => {
  res.send('TechMart Server Running');
});

app.listen(port, () => {
  console.log(`🚀 Server running on ${port}`);
});
