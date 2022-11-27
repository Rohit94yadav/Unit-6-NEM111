const express = require("express")

const fs = require("fs")
const cors = require("cors")

const studentRouter = express.Router()

studentRouter.get("/", (req,res) =>{
    res.send("all students")
})

studentRouter.get("/web19", (req,res) =>{
    res.send("all web19 students")
})

module.exports = {
    studentRouter
}

