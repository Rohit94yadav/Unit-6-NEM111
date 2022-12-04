const mongoose=require('mongoose');
const Noteschema=new mongoose.Schema({
    id:String,
    title:String,
     note:String,
     tags:String
});
const NotesModel=mongoose.model("notes",Noteschema);

module.exports={NotesModel};