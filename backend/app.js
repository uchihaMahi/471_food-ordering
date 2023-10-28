const express = require("express")
const { getDb, connectToDb } = require('./dbConnect')

const app = express()
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let db
connectToDb((err) =>{
    if(!err){
        app.listen(3000)
        db = getDb()
    }
    else{
        console.log("err")
    }
})


app.get("/", (req, res) =>{
    res.render('index')
})

app.post("/", (req, res) =>{
    //let userName = req.body.username
    //let passWord = req.body.password
    db.collection("password").findOne({name:req.body.username}).then(doc =>{
        console.log(doc)
        if(req.body.password == doc.password){
            if(doc.type == "user"){
                res.render("userDash",{doc})
            }
            else{
                if(doc.type == "restaurent"){
                    res.render("restDash",{doc})
                }
                else{
                    if(doc.type == "admin"){
                        res.render("adminDash",{doc})
                    }
                }
            }
        }
        else{
            res.send("password incorrect")
        }
    }).catch(err =>{
        console.log("err")
    })


    
})

app.get("/register", (req,res)=>{
    res.render("register")
})

app.post("/register", (req,res)=>{
    console.log(req.body.username)
    res.send(req.body)
})