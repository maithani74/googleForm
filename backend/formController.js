const { formModel } = require("./formModel");

exports.formController = async(req,res)=>{
    try {
        const {checkbox,shortans,paragraph,dropdown,linearscale} = req.body;
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