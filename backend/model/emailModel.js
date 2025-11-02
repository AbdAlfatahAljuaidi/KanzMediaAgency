const mongoose = require("mongoose")

const emailSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    businessType:{
type:String
    },

    Brief:{
        type:String
    },
    contentType:{
        type:String
    },

    Package:{
        type:String
    }



},{timestamps:true})

const sendEmail = mongoose.model("sendEmail",emailSchema)

module.exports = sendEmail


