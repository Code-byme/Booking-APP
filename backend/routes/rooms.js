const router = require("./users");
const express = require("express")
const {createRoom, updatedRoom, deleteRoom, getRoom, getAllRooms} = require("../controllers/room");
const { verifyAdmin } = require("../utils/verifyToken");

//Create
router.post("/:hotelid",verifyAdmin, createRoom)
    
//Update
router.put("/:id",verifyAdmin, updatedRoom)
//Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)
//Get
router.get("/:id", getRoom)
//Get All
router.get("/", getAllRooms)

module.exports = router
