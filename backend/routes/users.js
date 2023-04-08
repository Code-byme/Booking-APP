const express =  require('express');
const {updateUser, deleteUser, getUser, getAllUser} = require("../controllers/user");
const {verifyToken,verifyUser, verifyAdmin} = require('../utils/verifyToken');
const router = express.Router();


// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })
    
//Update
router.put("/", verifyUser, updateUser)
//Delete
router.delete("/:id",verifyUser, deleteUser)
//Get
router.get("/:id", verifyUser, getUser)
//Get All
router.get("/", verifyAdmin, getAllUser)


module.exports = router