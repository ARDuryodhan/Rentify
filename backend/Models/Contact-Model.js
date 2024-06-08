const { Schema, model } = require("mongoose");
const { required } = require("../Validators/auth-validator");

const contactSchema = new Schema({
    firstname:{
        type:String,
        require: true,
    },
    lastname:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
    },
    message:{
        type:String,
        require: true,
    }
});


//contact model and collections

const Contact = new model("Contact", contactSchema);

module.exports = Contact; 