const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    
    eventId: { 
        type: Number, 
        required: true,
    },
    
    username : {
        type : String,
        required : true,
    }


    })



module.exports = mongoose.model("Order", OrderSchema)