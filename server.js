const express = require('express');
const hbs = require('hbs');
var app = express();
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use((req,res,next)=>{
    var now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});
app.use((req,res,next)=>{
   res.render('maintainence.hbs');
});
app.use(express.static(__dirname + '/html'));

hbs.registerHelper('getCurrYear',()=>{
    return new Date().getFullYear();
});
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        name:'Uttu'
    });
   });
app.get('/about',(req,res)=>{
 res.render('about.hbs',{
     name:'Uttu'
 });
});


app.get('/bad',(req,res)=>{
    // res.send('<h1>Hello Express</h1>');
    res.send({
        error:'Something went wrong',
    });
 });
app.listen(port,()=>{
    console.log(`Server is up on port: ${port}`);
});