const mongoose=require("mongoose");
const TodosSchema=new mongoose.Schema({
    taskname:{type:String,required:true},
    status:{type:String,required:true},
   tag:{type:String,required:true},
   user_id:{type:String,required:true}
})

const TodosModel=mongoose.model("todos",TodosSchema);

module.exports={
    TodosModel
}