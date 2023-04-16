const Ticket = require("../models/Ticket");

// Add item to cart
const addTicket = async (req, res) => {
  try {
    const { eventId, category, quantity } = req.body;
    if (!eventId || typeof eventId !== 'number') {
      return res.status(400).json({ message: 'Invalid eventId' });
    }
    if (!category || typeof category !== 'string') {
      return res.status(400).json({ message: 'Invalid category' });
    }
    if (!quantity || typeof quantity !== 'number' || quantity < 1) {
      return res.status(400).json({ message: 'Invalid quantity' });
    }

    const ticketItem = new Ticket(req.body);
    const savedTicket = await ticketItem.save();
    res.status(200).json(savedTicket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTicketItems = async (req, res) => {
    
    try {
      const ticketItems = await Ticket.find({username:req.query.username});
      res.json(ticketItems);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {addTicket, getTicketItems}
