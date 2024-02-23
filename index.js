// const express = require('express');
// const app = express();
require('dotenv').config();
const app = require('./app')
const PORT = process.env.PORT || 3000;



app.listen(PORT, ()=>{
    console.log(`Server is running successfully at http://localhost:${PORT}`)
})