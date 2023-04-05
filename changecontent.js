const http=require('http');
const fs=require('fs');
let data=JSON.parse(fs.readFileSync('data.json','utf-8'));
let data2=fs.readFileSync('data.html','utf-8');
const server=http.createServer((request,response)=>{
    response.writeHead(200,{'content-Type':'text/html'})
    // response.end("server starts successfully");
    let harr=data.map((d)=>{var arr=data2.replace('{{%id%}}',d.id)
arr=arr.replace('{{%name%}}',d.name);
arr=arr.replace('{{%Role%}}',d.role);
return arr;
})
response.writeHead(200,{'content-Type':'text/html'});
response.end(harr.join(','));
    // console.log(data);

    })
server.listen(3000,(err,value)=>{
    console.log(err);
    console.log("thanks");
})