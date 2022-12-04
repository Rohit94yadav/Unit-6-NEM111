const {NotesModel}=require("../model/note.model");
const {UserModel}=require("../model/user.model");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt")
const DeleteNotes=async(req,res)=>{
    const id=req.params.id;

    const token=req.headers.authorization;
    if(token){
        try{
            var decoded=jwt.verify(token,'secret');
            const {email}=decoded
            const user=await UserModel.findOne({email});
           const result=await NotesModel.deleteOne({id:user._id,_id:id},{$set:{title:req.body.title,note:req.body.note,tags:req.body.tags}});

            res.send("Notes deleted");
        }catch(err){
            res.send("Check Token")
        }
    }else{
        res.send("Please login first")
    }
}
const UpdateNotes=async(req,res)=>{
    const id=req.params.id;

    const token=req.headers.authorization;
    if(token){
        try{
            var decoded=jwt.verify(token,'secret');
            const {email}=decoded
            const user=await UserModel.findOne({email});
           const result=await NotesModel.updateOne({id:user._id,_id:id},{$set:{title:req.body.title,note:req.body.note,tags:req.body.tags}});

            res.send("Notes Updated");
        }catch(err){
            res.send("Check Token")
        }
    }else{
        res.send("Please login first")
    }
}
const ReadNotes=async(req,res)=>{
    const token=req.headers.authorization;
    if(token){
        try{
            var decoded=jwt.verify(token,'secret');
            const {email}=decoded
            const user=await UserModel.findOne({email});
           const result=await NotesModel.find({id:user._id})
            res.send(result);
        }catch(err){
            res.send("Check Token")
        }
    }else{
        res.send("Please login first")
    }
}
const CreateNotes=async(req,res)=>{
    const token=req.headers.authorization;
const {title, note ,tags}=req.body;
if(token){
    try{
        var decoded=jwt.verify(token,'secret');
        const {email}=decoded
        const user=await UserModel.findOne({email});
        const new_notes=new NotesModel({
           
            id:user._id,
            title:title,
            note:note,
            tags:tags
        });
        await new_notes.save();
        res.send("Notes created!");
    }catch(err){
        res.send("Check Token")
    }
}else{
    res.send("Please login first")
}
}
const SignUp=async(req,res)=>{
    const {email,password}=req.body;
    bcrypt.hash(password,2,async function(err,hash){
        if(err){
            res.send("Something went wrong please signup after sometime")
        }else{
            const result=await UserModel.findOne({email});
            if(result){
                res.send("Email Already exist!")
            }else{
                const new_user=new UserModel({
                    email:email,
                    password:hash
                });
                await new_user.save();
                res.send("Signup Successfully!");
            }
        }
    })
 
}

const Login=async(req,res)=>{
    const {email,password}=req.body;
    const user=await UserModel.findOne({email});
   
    if(user){
        const hash_password=user.password;
        bcrypt.compare(password,hash_password,function(err,result){
            if(result){
                var token=jwt.sign({
                    exp:Math.floor(Date.now()/100)+(60*60),
                    email:email
                },'secret')
                res.send({message:"Login Succesfull",token:token})
            }else{
               
             res.send("Login Failed!");
            }
        })
    }else{
        res.send("Please signup First")
    }
    
    // const result=await UserModel.findOne({email,password});
   
}


const NotesController={
    SignUp,Login,CreateNotes,ReadNotes,UpdateNotes,DeleteNotes
};

module.exports=NotesController;