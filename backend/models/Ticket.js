const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TicketSchema = new Schema({
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
    },
    dateOfEvent: {
        type: String,
        
      },
      openAt: {
        type: String,
        
      },
      startAt: {
        type: String,
        
      }

    })



module.exports = mongoose.model("Ticket", TicketSchema)