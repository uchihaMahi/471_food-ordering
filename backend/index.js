const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const authController = require('./controllers/authController')
const productController = require('./controllers/productController')
const uploadController = require('./controllers/uploadController')
const app = express()

// connect our db
const dbConnection = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        authSource: 'admin', // specify the authentication database
      })
      console.log('Database connection is successful.')
    } catch (error) {
      console.error(error)
    }
  }
  
  dbConnection()

// routes & middlewares
app.use(cors({
    origin: 'http://localhost:3000' // Allow only this origin
}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/images', express.static('public/images'))
app.use('/auth', authController)
app.use('/product', productController)
app.use('/upload', uploadController)

// start our server
app.listen(process.env.PORT, () => console.log('Server has been started successfully'))

app.get("/history", (req,res) =>{
  console.log(req.query.name)
  db.collection("users").findOne({name:req.query.name}).then(doc =>{
      res.render("history",{history:doc.history})
      console.log(doc.history)
  })

})