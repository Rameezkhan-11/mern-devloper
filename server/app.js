const dotenv = require("dotenv");
const mongoose = require("mongoose"); 
const express = require("express");
const app = express();


dotenv.config({path: 'server/config.env'})
require("./db/con")
const User = require("./models/register")

app.use(require("./router/auth"))
const port = process.env.PORT || 3000;




app.listen(port,()=>{

    console.log(`Server is listning on ${port}`);



})

