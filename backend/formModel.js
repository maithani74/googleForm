const mongoose=require("mongoose")

const formSchema = new mongoose.Schema({
    mcq:{
        type:String,
    },
    checkbox:{
        type:String,
    },
    shortans:{
        type:String,
    },
    paragraph:{
        type:String,
    },
    dropdown:{
        type:String,
    },
    linearscale:{
        type:Number
    },
},{timestamps:true})

exports.formModel = mongoose.model("formModel",formSchema);