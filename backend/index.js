const express  =require("express");
const mongoose = require("mongoose")
const app = express();
const morgan = require("morgan")
const formRouter = require("./formRoute")
app.use(express.json());
app.use(morgan("dev"))
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

app.listen(8080,()=>{
    console.log("Server started on port 8080")
})