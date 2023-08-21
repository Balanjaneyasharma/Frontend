const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req,res){
    fs.readFile('myhtml.html',function(error,data){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write(data)
        res.end(); 
    })
    
})

server.listen(port,function(error){
    if(error){
        console.log("something went wrong");

    }else{
        console.log("listening to port.09. ")
    }
})
