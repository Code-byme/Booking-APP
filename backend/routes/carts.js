const express = require("express");;
const { addItem, getCartItems, getCartItemById, updateCartItem, removeCartItem } = require("../controllers/cart");

const router = express.Router();

// Add ticket to cart
router.post("/cart", addItem);

// Get all tickets in cart
router.get("/cart", getCartItems);

// Get a specific ticket from cart
router.get("/cart/:id", getCartItemById);

// Update a specific ticket in cart
router.patch("/cart/:id", updateCartItem);

// Remove a specific ticket from cart
router.delete("/cart/:id", removeCartItem);

module.exports = router;
