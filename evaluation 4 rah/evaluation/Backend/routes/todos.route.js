const express=require("express");
const {TodosController}=require("../controllers/Todos.controller");
const {Authentication}=require("../middlewares/Authentication")

const TodosRouter=express.Router();
TodosRouter.post('/addtodos',Authentication,TodosController.AddTodos)
TodosRouter.get('/',Authentication,TodosController.GetAllTodos)
TodosRouter.patch('/updatetodos/:id',Authentication,TodosController.UpdateTodos)
TodosRouter.delete('/deletetodos/:id',Authentication,TodosController.DeleteTodos)


module.exports={
    TodosRouter
}