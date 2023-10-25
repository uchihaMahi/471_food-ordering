const express = require("express")
const app = express()
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get("/", (req, res) =>{
    res.render('index')
})

app.post("/", (req, res) =>{
    let userName = req.body.username
    let passWord = req.body.password
    if(userName == "user1" && passWord == "1234"){
        let userMsg={user : userName, pass : passWord}
        console.log(userMsg)
        res.render("userDash",{userMsg})
    }
    else{
        if(userName == "rest1" && passWord == "4321"){
            let restMsg={user : userName, pass : passWord}
            console.log(restMsg)
            res.render("restDash",{restMsg})
        }
        else{
            if(userName == "admin1" && passWord == "9999"){
                let adminMsg={user : userName, pass : passWord}
                console.log(adminMsg)
                res.render("adminDash",{adminMsg})
            }
            else{
                res.send("User Name or Password Incorrect")
            }
        }
    }
})


app.listen(5000)
