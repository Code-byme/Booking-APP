const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CartSchema = new Schema({
    event : {
      type: String,
      required: true,
    },
    imgEvent: { 
        type: String, 
        required: true,
        
    },
    eventId: { 
        type: Number, 
        required: true,
    },
    quantity : {
        type: Number,
        required : true,
    },
    price: {
        type : Number,
        required : true,
        },
    category : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
    }

    })



module.exports = mongoose.model("Cart", CartSchema)