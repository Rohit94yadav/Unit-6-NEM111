const express = require("express")
require("dotenv").config()
const app = express()
 
const {connection} = require("./config/db")
const {UserModel} = require("./Models/User.model")
const {TeacherModel} = require("./Models/Teacher.model")
const {userRouter} = require("./routes/users.route")

app.use(express.json())

app.get("/", (req, res) => {
    res.send({"msg" : "Welcome"})
})

app.use("/users", userRouter)









app.listen(7500, async () => {
    try{
     await connection;
     console.log("Connected to DB Successfully")
    }
    catch(err){
        console.log("Connection to DB failed")
        console.log(err)
    }
    console.log(`Listening on port 7500`)
})





// const express = require("express")

// const app = express();

//const mongoose = require("mongoose")

//const {connection, UserModel} = require("./db")


//app.use(express.json())



// const main = async ()=>{
//     try{

//         const connection = await mongoose.connect("mongodb://127.0.0.1:27017/firstdb")
//         console.log("connected to database...")
//     //     await Studentmodel.insertMany([{ name:"rohit",
//     //         age:28,
//     //         city:"gurgaon"}])
//     const stu = new Studentmodel({ name:"sohit",
//              age:28,
//              city:"gurgaon"})

//              await stu.save()
//              console.log("data added")
//      }
//     catch(err){
//         console.log(err)
//     }

// }

// main()

// const studentSchema = mongoose.Schema({
//     name:String,
//     age:Number,
//     city:String,
// })

// const Studentmodel = mongoose.model("student",studentSchema )

// app.listen(7500,()=>{
//     console.log("running on port 7500...")
// })
    
