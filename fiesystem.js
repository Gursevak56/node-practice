 const fs=require('fs');
const http=require('http');
const hello=fs.readFileSync('./files/index.html','utf-8');
const server=http.createServer((req,res)=>{
    console.log("this is your first commit to understand");
    res.end(hello);
});

server.listen(4000,()=>{
    console.log("server is running on 4000");
})