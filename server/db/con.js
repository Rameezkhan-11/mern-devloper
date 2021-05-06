const mongoose = require("mongoose");
const db = process.env.DATABASE;


const connectDb = async ()=>{
    try{
    const creation =  await mongoose.connect(db,{
    
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    
    
    
    });
    console.log("db created");
    }
    catch(err){
    
    console.log(err);
    
    
    }
    
    
    
    
    }
    
    connectDb();