const express = require('express')
const router = express.Router()
const {orderedEvent, getEventOrdered, checkQrcode, getQrCode} = require('../controllers/order')

router.post("/", orderedEvent);

// Get all tickets in cart
router.get("/", getEventOrdered);

router.get("/check", checkQrcode);

router.get("/get", getQrCode);

module.exports = router;
