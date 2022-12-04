const express = require("express")

const userRouter = express.Router()
const {UserModel} = require("../Models/User.model")

userRouter.get("/", async (req, res) => {
    const params = req.query
    try{
        const users = await UserModel.find(params)
        res.send(users)
    }
    catch(err){
        console.log(err)
        res.send({"err" : "something went wrong"})
    }
  
})

userRouter.post("/create", async (req, res) => {
    try{
        const payload = req.body
        const user = new UserModel(payload)
        await user.save()
        res.send({"msg" : "Created successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "something went wrong"})
    }
})

userRouter.patch("/edit/:userID", async (req, res) => {
    const userID = req.params.userID
    const payload = req.body;
    try{
        const query = await UserModel.findByIdAndUpdate({_id :userID},payload)
        console.log(query)
        res.send("Updated")
    }
    catch(err){
        console.log(err)
        res.send({"err" : "something went wrong, try again later"})
    }
})

userRouter.delete("/delete/:userID", async (req, res) => {
    const userID = req.params.userID
    try{
        await UserModel.findByIdAndDelete({_id : userID})
        res.send(`User ${userID} deleted successfully`)
    }
    catch(err){
        console.log(err)
        res.send({"err" : "something went wrong, try again later"})
    }
})

module.exports = {userRouter}