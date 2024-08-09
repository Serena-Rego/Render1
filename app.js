import express from 'express';
import sqlitedb from './models/index.js';

const app=express();

app.use(express.json());
app.get('/accounts',async (req,res)=>{
    console.log(req.path);
    try{
        const account = await sqlitedb.Account.findAll();
        res.status(200).json({success: true, data: account});
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

app.listen(8000,()=>{
    console.log("Server started");
});



