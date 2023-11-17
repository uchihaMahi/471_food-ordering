const express = require("express")
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const app = express()

//database connection

mongoose.set('strictQuery', false) // This line of code turns off strict query mode for mongoose. This will allow mongoose to use non-standard query syntax.
const dbConnection = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log('Database connection is successful.');
    } catch (error) {
      console.error(error);
    }
  };
  dbConnection();

// server start

app.listen(process.env.PORT, () => console.log('Server has started successfully.'))





