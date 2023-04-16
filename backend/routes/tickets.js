const express = require("express");;
const { addTicket, getTicketItems } = require("../controllers/ticket");

const router = express.Router();

// Add ticket to cart
router.post("/", addTicket);
router.get("/", getTicketItems);

module.exports = router;