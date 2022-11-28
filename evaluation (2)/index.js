const express=require("express")
const fs=require("fs")

const app=express()

app.use(express.json())

 const validator=(req,res,next)=>{
   if(req.method==="POST"){

     if(req.body.id!==undefined

        && req.body.title!==undefined 

        && req.body.content!==undefined 

        && req.body.author!==undefined 

       && typeof(req.body.id)==="number"

        && typeof(req.body.title)==="string"

         && typeof(req.body.content)==="string" 
         
         && typeof(req.body.author)==="string"){

          next()

         } else{
           res.status(400).send("validation faild")
         } 
        


     } else{
      next()
     }
   
  }
 const password=(req,res,next)=>{
   if(req.method==="DELETE" && req.method==="PATCH"){
     if(req.query.password===54213){
       next()
     } else{
       res.send("you are not authorised to do this operation")
     }
   }
next()
 }

const logger=(req,res,next)=>{
  const file=`method-${req.method} url - ${req.originalURL} userAgent -$ {req.headers["user-agent]}`+"/r/n"
   fs.appendFileSync("./logs.txt",file,{encoding:"utf-8"})
   next()
 }
  app.use(validator,password,logger)

app.get("/posts",(req,res)=>{
  res.send("Here is all posts")
})

app.post("/posts/create",(req,res)=>{


  const post=req.body

  const file=fs.readFileSync("./posts.json",{encoding:"utf-8"})

  const parsefile=JSON.parse(file)

  let newarr=parsefile.posts.push(post)

  fs.writeFileSync("./posts.json",JSON.stringify(parsefile),{encoding:"utf-8"})
  res.send("post is add")
})

app.delete("/posts/:postId",(req,res)=>{


  const {postId}=req.params

  const file=fs.readFileSync("./posts.json","utf-8")

  const parsefile=JSON.parse(file)

  let posts=parsefile.posts

  let updatepost=posts.filter(e=>{
    return  e.id ==postId ?false :true
  })

  parsefile.posts=updatepost

  fs.writeFileSync("./posts.json",JSON.stringify(parsefile),"utf-8")
  res.send("posts is delete")
})

app.patch("/posts/:postId",(req,res)=>{


  const {postId}=req.params

  const load=req.body

  const file=fs.readFileSync("./posts.json","utf-8")

  const parsefile=JSON.parse(file)

  let posts=parsefile.posts

  let updatepost=posts.map(e=>{
    return  e.id ==postId ? {...load,id:postId} :e
  })

  parsefile.posts=updatepost

  fs.writeFileSync("./posts.json",JSON.stringify(parsefile),"utf-8")
  res.send("posts is patch")
})


app.listen(7200,()=>{
  console.log("rahul")
})