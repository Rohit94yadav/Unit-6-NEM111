const { TodosModel}=require("../model/todos.model");
const {UserModel}=require("../model/user.model")

const AddTodos=async(req,res)=>{
    const {taskname,user_id,status,tag}=req.body
 const new_Todo=new TodosModel({
    taskname:taskname,
    tag:tag,
    status:status,
user_id
 })    
 await new_Todo.save();
 res.send({mag:"Todo added"});
}

const DeleteTodos=async(req,res)=>{
    const id =req.params.id;
    const user_id=req.body.user_id;
    await TodosModel.deleteOne({user_id:user_id,_id:id})
    res.send({msg:"Todo Deleted"})
}

const GetAllTodos=async(req,res)=>{
    const {status}=req.query;
    const user_id=req.body.user_id;
    console.log(status,user_id)
    if(status){
        const result=await TodosModel.find({user_id:user_id,status:status})
        res.send(result)  
    }else{
   
    const result=await TodosModel.find({user_id:user_id})
    res.send(result)
    }
}
const UpdateTodos=async(req,res)=>{
    const id =req.params.id;
    const {taskname,user_id,status,tag}=req.body;

   await TodosModel.updateOne({user_id:user_id,_id:id},{$set:{taskname:taskname,tag:tag,status:status}})
    res.send({mag:"Todo updated"});
}

const TodosController={
    AddTodos,DeleteTodos,UpdateTodos,GetAllTodos
}

module.exports={
    TodosController
}