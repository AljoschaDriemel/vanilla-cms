const express = require('express')
const mongoose = require("mongoose");

const { Member } = require("./models/models.js");

const app = express()

const port = 3000

app.use(express.json());



app.get("/", async (req, res) => {
    return res.json({ message: "Hello, World" });
  });


  app.get("/member", async (req, res) => {
    
  });
  

const start = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://admin:admin@scms.a8a7b0d.mongodb.net/?retryWrites=true&w=majority"
      );
      app.listen(port, () => console.log("Listening on port", port));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };

  start();