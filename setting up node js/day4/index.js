const http = require("http");
const fs = require("fs")

const server = http.createServer((request, response)=>{
    if(request.url === "/"){
        response.setHeader("content-type","text/html")
        response.end("<h1>hello rohit yadav</h1>")
    }
    else if(request.url === "/reports"){
        response.end("reports")
    }
    else if(request.url === "/add" && request.method === "POST"){
        let str =""
        request.on("data", (packet)=>{
            str += packet;
        })
        request.on("end", ()=>{
           console.log(str);
        })

        response.end("reports")
    }
    else if(request.url === "/movies"){
        const movieStream = fs.createReadStream("./movies.txt", {encoding:"utf-8"})
        movieStream.pipe(response)
        //response.end("reports")
    }
    
})

server.listen(9000,()=>{
    console.log("port 9000")
})