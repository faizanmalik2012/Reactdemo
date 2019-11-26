var express=require('express');
var app=express.Router();

app.get('/',function(req,res){
res.end('my frist response');
});


app.listen(3000);


