const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// ── Middleware ──────────────────────────────────────────────
app.use(cors());          // Allow cross-origin requests from the frontend
app.use(express.json());  // Parse incoming JSON request body

// ── MongoDB Connection ──────────────────────────────────────
const client = new MongoClient(process.env.MONGO_DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  await client.connect();
  console.log('✅ Connected to MongoDB');

  // TODO: Replace 'myapp' and 'items' with your database and collection names
  const db = client.db(process.env.DB_NAME || 'myapp');
  const itemCollection = db.collection(process.env.COLLECTION_NAME || 'items');

  // ── CREATE ──────────────────────────────────────────────────
  app.post('/items', async (req, res) => {
    const item = req.body;
    const result = await itemCollection.insertOne(item);
    res.send(result);
  });

  // ── READ ────────────────────────────────────────────────────
  app.get('/items', async (req, res) => {
    const items = await itemCollection.find({}).toArray();
    res.send(items);
  });

  app.get('/items/:id', async (req, res) => {
    const id = req.params.id;
    const item = await itemCollection.findOne({ _id: new ObjectId(id) });
    res.send(item);
  });

  // ── UPDATE ──────────────────────────────────────────────────
  app.put('/items/:id', async (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;

    const result = await itemCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedItem },
    );

    res.send(result);
  });

  // ── DELETE ──────────────────────────────────────────────────
  app.delete('/items/:id', async (req, res) => {
    const id = req.params.id;
    const result = await itemCollection.deleteOne({ _id: new ObjectId(id) });
    res.send(result);
  });
}

run().catch(console.error);

// ── Root Route ──────────────────────────────────────────────
app.get('/', (req, res) => {
  res.send('🚀 Server is running');
});

// ── Start Server ────────────────────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
