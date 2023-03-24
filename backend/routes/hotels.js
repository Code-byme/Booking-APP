const express =  require('express');
const {createHotel, updateHotel, deleteHotel, getHotel, getAllHotel, countByCity } = require('../controllers/hotel');

const router = express.Router();
const Hotel = require("../models/Hotel")
const createError = require("../utils/error")
const { verifyAdmin} = require('../utils/verifyToken');

//Create
router.post("/",verifyAdmin, createHotel)
    
//Update
router.put("/:id",verifyAdmin, updateHotel)
//Delete
router.delete("/find/:id", verifyAdmin, deleteHotel)
//Get
router.get("/:id", getHotel)
//Get All
router.get("/", getAllHotel)
router.get("/find/countByCity", countByCity)
router.get("/countByType", getAllHotel)

module.exports = router