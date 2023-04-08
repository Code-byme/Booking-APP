const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const updateUser = async (req, res, next) => {


    const { email, username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    try {
      const user = await User.findOneAndUpdate(
        { email: email },
        { $set: { username, password:hash } },
        { new: true }
      );
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };

const deleteUser = async (req,res,next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (err) {
        next(err)
        
    }
}

const getUser = async (req,res,next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
        
    }
}

const getAllUser = async (req,res,next) => {
        try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
        
    }
}

module.exports = {updateUser, deleteUser, getUser, getAllUser}