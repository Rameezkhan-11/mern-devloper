const express = require("express");
const router = express.Router();









router.get("/",(req,res)=>{

res.send("Hello home page")



})
router.get("/about",(req,res)=>{

    res.send("Hello about page")
    
    
    
    })
    router.get("/signin",(req,res)=>{

        res.send("Hello sign in page")
        
        
        
        })

        router.get("/signup",(req,res)=>{

            res.send("Hello signup page")
            
            
            
            })



module.exports = router;
