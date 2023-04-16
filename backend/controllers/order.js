const Order = require("../models/Order")

const orderedEvent = async (req, res) => {
    try {
      const { eventId} = req.body;
      if (!eventId || typeof eventId !== 'number') {
        return res.status(400).json({ message: 'Invalid eventId' });
      }
     
  
      const orderEvent = new Order(req.body);
      const savedEvent = await orderEvent.save();
      res.status(200).json(savedEvent);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getEventOrdered = async (req, res) => {
    try {
      const orderEvents = await Order.find({username:req.query.username});
      res.json(orderEvents);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  module.exports = {orderedEvent, getEventOrdered}