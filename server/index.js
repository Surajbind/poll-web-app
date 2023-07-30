const express = require('express');
const handler= require('./handlers/error')
const app = express();
const port = 4001;


app.get('/',(req,res)=>{
    res.json("key:' Not Hello World'");
    res.end;
})

app.use(handler.notFound);
app.use(handler.errors);

app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})
