const express=require("express");
const {connection}=require("./config/db")
const cors=require("cors")
const {UserRouter}=require("./routes/user.route");
const {TodosRouter}=require("./routes/todos.route")
const app=express();
require("dotenv").config




app.use(express.json());
app.use(cors())
const PORT=process.env.PORT || 8080

app.get("/",(req,res)=>{
    res.send({msg:"home"})
})

app.use("/user",UserRouter)
app.use("/todos",TodosRouter)
app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("Connected Succesfull to db");

    }catch(err){
console.log("error from db");
console.log(err);
    }
console.log(`listing on port ${PORT}`)
})