const express = require('express');
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const port = 8000;
const MONGODB_URL = "mongodb+srv://Joos:mymongodbtechjourney@cluster0.ve60kgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const itemRouter = require('./routes/items');
app.use('/items', itemRouter);

mongoose.connect(MONGODB_URL)
  .then(()=>{
    console.log("Mongodb connected....")
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });
