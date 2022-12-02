let express = require ("express")
const path = require('path');
let app = express()




app.set('view engine','ejs');
app.set("views", path.join(__dirname, "./ejs/views"))

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, '/homepage.ejs'));
})

app.get("/homepage.ejs", (req,res)=>{
    res.sendFile(path.join(__dirname, '/homepage.ejs'));
})

app.get("/chatbotfinal.ejs", (req,res)=>{
    res.sendFile(path.join(__dirname, '/chatbotfinal.ejs'));
})

app.get("/inspired.ejs", (req,res)=>{
    res.sendFile(path.join(__dirname, '/inspired.ejs'));
})

app.get("/login.ejs", (req,res)=>{
    res.sendFile(path.join(__dirname, '/login.ejs'));
})

app.get("/meditate.ejs", (req,res)=>{
    res.sendFile(path.join(__dirname, '/meditate.ejs'));
})

app.get("/meme.ejs", (req,res)=>{
    res.sendFile(path.join(__dirname, '/meme.ejs'));
})
app.get("/twitter.ejs", (req,res)=>{
    res.sendFile(path.join(__dirname, '/twitter.ejs'));
})
app.get("/opening.ejs", (req,res)=>{
    res.sendFile(path.join(__dirname, '/opening.ejs'));
})
app.get("/profile.ejs", (req,res)=>{
    res.sendFile(path.join(__dirname, '/profile.ejs'));
})
app.get("/stories.ejs", (req,res)=>{
    res.sendFile(path.join(__dirname, '/stories.ejs'));
})

app.listen("3000", ()=>{
    console.log("serve is connected")
})