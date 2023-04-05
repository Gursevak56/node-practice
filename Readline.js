const readline=require('readline');
const rl=readline.createInterface();
rl.question('what is name of your pc ?',(data)=>{
    console.log(`the name of  my data is ${data}`);
})