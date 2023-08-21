console.log('ok');
const express = require('express');
const app = express()

app.set('view engine','ejs')
app.use(logger)

app.get('/',(req,res)=>{
    console.log('hi');
    //res.status(500).send('ok');
    //res.status(500).json({message : "Error"})
    //res.json({message : "Error"})
    //res.download("server.js")
    res.render('index',{text23 : "Express HTML"});
})
const userRouter = require('./routes/users');
//const postROuter = require('./routes/post);


app.use('/users',userRouter)

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}
app.listen(3000);

