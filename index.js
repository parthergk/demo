const express = require("express");
const app = express();


app.get('/', (req res)=>{
    res.json({message: "hello DevOps"});
})

app.listen(3000,()=>{
    console.log("server is runing on port 3000");
})