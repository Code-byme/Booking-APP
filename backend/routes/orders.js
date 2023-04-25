const express = require('express')
const router = express.Router()
const {orderedEvent, getEventOrdered, checkQrcode, getQrCode, getEventOrderedByID} = require('../controllers/order')

router.post("/", orderedEvent);

// Get all tickets in cart
router.get("/", getEventOrdered);

router.get("/:id", getEventOrderedByID);

router.get("/check/:qr", checkQrcode);

router.get("/get", getQrCode);

module.exports = router;
