const x= require("fs")

x.readFile("./calc.js",{encoding: "utf-8"}, (err, data) =>{
    if(err){
        console.log("err in reading file")
        console.log(err)
    }
    console.log(data)
})

console.log(x.readFileSync("./calc.js",{encoding: "utf-8"}))

x.writeFile("./hello.txt","hello 1st",{encoding: "utf-8"}, (err)=>{
    if(err){
        console.log(err)
    }
    console.log("check file")
})

x.appendFile("./hello.txt","  hello 2nd",{encoding: "utf-8"}, (err)=>{
    if(err){
        console.log(err)
    }
    console.log("check file 2nd")
})

console.log("bye")