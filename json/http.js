let express = require("express")
let path = require("path")
let app = express()

app.set ("view engine", "ejs")

app.set("views", path.join(__dirname,"../ejs/views"))

app.use(express.static('public'))

app.get("/", (req,res)=>{
    res.render("homepage", {
        "USERNAME": "rahul"
    })
})
app.get("/lifestyle.ejs", (req,res)=>{
    res.render("lifestyle", {
        "USERNAME": "rahul"
    })
})

app.get("/profile.ejs", (req,res)=>{
    res.render("profile", {
        "USERNAME": "rahul",
        "AboutUser":"i am from bml munjal university"
    })
})

app.get("/twitter.ejs", (req,res)=>{
    res.render("twitter", {
        "USERNAME": "rahul"
    })
})

app.get("/chatbot.ejs", (req,res)=>{
    res.render("chatbot", {
        "USERNAME": "rahul"
    })
})
app.get("/homepage.ejs", (req,res)=>{
    res.render("homepage", {
        "USERNAME": "rahul"
    })
})
app.get("/inspired.ejs", (req,res)=>{
    res.render("inspired", {
        "USERNAME": "rahul"
    })
})
app.get("/login.ejs", (req,res)=>{
    res.render("login", {
        "USERNAME": "rahul"
    })
})
app.get("/meditate.ejs", (req,res)=>{
    res.render("meditate", {
        "USERNAME": "rahul"
    })
})
app.get("/meme.ejs", (req,res)=>{
    res.render("meme", {
        "USERNAME": "rahul"
    })
})

app.get("/register.ejs", (req,res)=>{
    res.render("register", {
        "USERNAME": "rahul"
    })
})

app.listen("3000", ()=>{
    console.log("connected to server....")
    console.log(__dirname)    
    console.log(path.join(__dirname, "../ejs/views"))
})