const express = require('express')
const router = express.Router()
const {orderedEvent, getEventOrdered} = require('../controllers/order')

router.post("/", orderedEvent);

// Get all tickets in cart
router.get("/", getEventOrdered);

module.exports = router;
