import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
const DB_URL = "mongodb+srv://jamessteppingstone:wPlVhhEuxtSm1xHM@cluster0.pp2xrpj.mongodb.net/";

mongoose
.connect(DB_URL)
.then(()=>console.log("CONNECTED"))
.catch((err)=>console.log("NOT CONNECTED", err))

let City = mongoose.model("city", mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "city"}));

let app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/api/v1/city", async(req, res)=>{
    let result = await City.find();
    res.send(result);
})

app.listen(3000, ()=>console.log("Server Running"));
