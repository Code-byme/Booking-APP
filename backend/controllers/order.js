const Order = require("../models/Order")

const orderedEvent = async (req, res) => {
  for(let x of req.body) {
    try {
      const { eventId, category, quantity }= x;
      if (!eventId || typeof eventId !== 'number') {
        return res.status(400).json({ message: 'Invalid eventId' });
      }
      if (!category || typeof category !== 'string') {
        return res.status(400).json({ message: 'Invalid category' });
      }
      if (!quantity || typeof quantity !== 'number' || quantity < 1) {
        return res.status(400).json({ message: 'Invalid quantity' });
      }

  
      const orderEvent = new Order(x);
      const savedEvent = await orderEvent.save();
      
      
    }catch (err) {
      res.status(500).json({ message: err.message });
    }
    
  }
  res.status(200).send('success')
  };

  const getEventOrdered = async (req, res) => {
    try {
      const orderEvents = await Order.find({username:req.query.username});
      res.json(orderEvents);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  const getEventOrderedByID = async (req, res) => {
    try {
     const orderEvents = await Order.find({ eventId: req.params.id, username:req.query.username });
      res.json(orderEvents);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const checkQrcode = async (req, res) => {
    try {
      const orderEvents = await Order.find({qrCode:req.params.qr});
      if(orderEvents.length>0){
        res.status(200).send("Valid");  
      }else {
        res.status(404).send("Non Valid")
      }
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getQrCode = async (req, res) => {
    try {
      const orderEvents = await Order.find({eventId:req.query.eventId});
      res.json(orderEvents);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  module.exports = {orderedEvent, getEventOrdered, getEventOrderedByID, checkQrcode, getQrCode}