const express=require("express");
const {connection}=require("./config/db");
const {NotesRouter}=require("./routes/note.route");
let app=express();
require("dotenv").config();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Notes calling,,---- hey user for creating Notes use /create endpoint,for reading Notes use /read endpoint,for deleting Notes use /:id endpoint,for updating Notes use /:id endpoint")
});


app.use("/",NotesRouter);

app.listen(8080,async()=>{
    try{
        await connection;
        console.log("Connected to db Successfully")
    }catch(err){
        console.log("error to connecting");
        console.log(err)
    }
    console.log("Lising on port 8080")
})