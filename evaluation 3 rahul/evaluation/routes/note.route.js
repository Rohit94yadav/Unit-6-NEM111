const express=require("express");
const NotesController=require("../controllers/note.controller");
const {get, model}=require("mongoose");

const NotesRouter=express.Router();
// NotesRouter.get("/",getNotes)

const validator=(req,res,next)=>{
    const {title, note ,tags}=req.body;
    if(title && note && tags){
       next()
    }else{
        res.status(400).json({message:"validation failed"})
    }
}
NotesRouter.post("/signup",NotesController.SignUp)
NotesRouter.post("/login",NotesController.Login);
NotesRouter.post("/create",validator,NotesController.CreateNotes)
NotesRouter.get("/read",NotesController.ReadNotes)
NotesRouter.patch("/:id",NotesController.UpdateNotes);
NotesRouter.delete('/:id',NotesController.DeleteNotes)
module.exports={
    NotesRouter
}