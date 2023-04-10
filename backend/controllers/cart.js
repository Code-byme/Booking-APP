const Cart = require("../models/Cart");

// Add item to cart
const addItem = async (req, res) => {
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

    const cartItem = new Cart(req.body);
    const savedItem = await cartItem.save();
    res.status(200).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get all items in cart
const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({username:req.query.username});
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific item from cart
const getCartItemById = async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id);
    if (!cartItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(cartItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a specific item in cart
const updateCartItem = async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id);
    if (!cartItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    cartItem.username = req.body.username;
    cartItem.eventId = req.body.eventId;
    const updatedItem = await cartItem.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Remove a specific item from cart
const removeCartItem = async (req, res) => {

  try {
    const { username, eventId } = req.query;
    const cartItemfound = await Cart.findOne({username:username, eventId:eventId});
    if (!cartItemfound) {
      return res.status(404).json({ message: "Item not found" });
    }
    const cartItem = await Cart.deleteOne({username:username, eventId:eventId});

    res.status(200).json({message:"Item removed from cart"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {addItem, getCartItems, getCartItemById, updateCartItem, removeCartItem}
