const dotenv = require("dotenv");
const mongoose = require("mongoose"); 
const express = require("express");
const app = express();


dotenv.config({path: 'server/config.env'})
require("./db/con")




const port = process.env.PORT || 3000;


app.get("/",(req,res)=>{

res.send("Hello home page")



})
app.get("/about",(req,res)=>{

    res.send("Hello about page")
    
    
    
    })
    app.get("/signin",(req,res)=>{

        res.send("Hello sign in page")
        
        
        
        })

        app.get("/signup",(req,res)=>{

            res.send("Hello signup page")
            
            
            
            })
app.listen(port,()=>{

    console.log(`Server is listning on ${port}`);



})