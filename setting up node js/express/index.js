

const express = require("express")

const fs = require("fs")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/add",(req,res)=>{
    fs.writeFileSync("./name.txt",JSON.stringify(req.body), "utf-8")
    console.log(req.body)
    res.send("add data")
})

app.get("/details",(req,res)=>{
    const data = fs.readFileSync("./name.txt","utf-8")
    res.send(data,"send all details")
})

app.get("/students",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8")
   const parsedData = JSON.parse(data);
   const students = parsedData.students
   console.log(students)
    res.json(students)
})

app.post("/addstudents",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8")
    const parsedData = JSON.parse(data)
    const student = req.body
    parsedData.students.push(student)
    const finaldata = JSON.stringify(parsedData)
    fs.writeFileSync("./db.json",finaldata, "utf-8")
    console.log(req.body)
    res.send("add data")
})

app.listen(9000, ()=>{
    console.log("port 9000")
})