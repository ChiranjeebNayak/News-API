const express = require('express')
const app = express()

app.get("/api/news", (req,res) =>{
    return res.send("Fetching news....");
})

app.listen(8000, (err) => {
    if(err){
        console.log("err : "+ err);
    }
    else{
        console.log("Server is running on PORT 8000");
    }
})