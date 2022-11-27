

const express = require("express")
const { studentRouter } = require("./student.route")


const app = express()

app.use((req,res,next)=>{
    console.log("middleware")
    next()
})

app.use((cors)({
    origin:"*"
}))

app.use("/students",studentRouter)

app.get("/",(req,res)=>{
    res.send("welcome")
})


app.listen(9000,()=>{
    console.log("port 9000")
})