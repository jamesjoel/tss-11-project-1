import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import path from 'path'
const DB_URL = "mongodb+srv://jamessteppingstone:wPlVhhEuxtSm1xHM@cluster0.pp2xrpj.mongodb.net/";

let app = express();
/*---------------FOR LIVE SERVER----------------------*/
const root = path.join(path.resolve()+"/dist")
app.use(express.static(root));
/*---------------FOR LIVE SERVER----------------------*/



mongoose
.connect(DB_URL)
.then(()=>console.log("CONNECTED"))
.catch((err)=>console.log("NOT CONNECTED", err))

let City = mongoose.model("city", mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "city"}));

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))



app.get("/api/v1/city", async(req, res)=>{
    let result = await City.find();
    res.send(result);
})


// FOR LIVE SERVER
app.get("/{*splat}", (req, res)=>{
    res.sendFile("index.html", {root});
    
})
// FOR LIVE SERVER

let PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log("Server Running"));
