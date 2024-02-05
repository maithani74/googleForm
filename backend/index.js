const express  =require("express");
const mongoose = require("mongoose")
const app = express();
const morgan = require("morgan")
const cors = require('cors')
const formRouter = require("./formRoute")
const path = require('path')
app.use(express.json());
app.use(morgan("dev"))
app.use(cors());
app.use(express.static(path.join(__dirname,'../frontend/build')))
const connectDB = async()=>{
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/form");
        console.log("connected Successfully")
    } catch (error) {
        console.log(error)
    }
}

connectDB()

app.use("/api/v1",formRouter.router)

app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,"../frontend/build/index.html"))
})

app.listen(8080,()=>{
    console.log("Server started on port 8080")
})