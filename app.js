const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("this is home route")
})


module.exports = app;