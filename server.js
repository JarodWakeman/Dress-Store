const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jarodwakeman:biscuit1994@marketplace.4txeqcq.mongodb.net/Marketplace?retryWrites=true&w=majority";
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3500;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
async function run() {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      await client.close();
    }
  }
run().catch(console.dir);

app.get('/' , (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
