const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send({status:ok});
})

app.use(express.json);

app.listen(5000,()=>{
    console.log("Server started on 5000");
})

