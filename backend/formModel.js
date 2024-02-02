const mongoose=require("mongoose")

const formSchema = new mongoose.Schema({
    checkbox:{
        type:String,
        required:true,
    },
    shortans:{
        type:String,
        required:true,
    },
    paragraph:{
        type:String,
        required:true,
    },
    dropdown:{
        type:String,
        required:true,
    },
    linearscale:{
        type:Number,
        required:true,
    },
},{timestamps:true})

exports.formModel = mongoose.model("formModel",formSchema);