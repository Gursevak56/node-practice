const { stdin, stdout } = require('process');
const readline=require('readline');
const rl=readline.createInterface({
input:stdin,
output:stdout
})
rl.question('what is yout name ?',(data)=>{
console.log(`your name is ${data}`);
})
rl.close();
rl.on('close',()=>{
    console.log("your name is gursevak singh");
})