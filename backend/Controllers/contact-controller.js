const  Contact = require("../Models/Contact-Model");

const contactusForm= async(req,res)=>{
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message: "Your messsage Send Successfully "})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Your messsage not Send"})

    }
}

module.exports = contactusForm;