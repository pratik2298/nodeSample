const express = require('express')
const app = express();

// Commnet added by me

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.listen(5001, ()=>{
    console.log("Application started");
})
