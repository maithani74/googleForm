const { formModel } = require("./formModel");

exports.formController = async(req,res)=>{
    try {
        const {mcq,shortans,linearscale,paragraph,checkbox,dropdown} = req.body;
        const form = new formModel({...req.body});
        await form.save();
        res.status(201).send({
            success:true,
            message:"Form submitted",
            form
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:true,
            message:"Error in form controller",
            error
        })
    }
}