const express=require('express');
var app=express();
const connection=require('./model/database');

connection.connect(function(err)
{
    if(err)
    {
        console.log(err);
    }
    console.log('Connected');
})
connection.query('Create table list(id int)',(err,res)=>
{
    if(err)throw err;
    if(res)
    {
        console.log("table is create");
    }
})
app.listen(3000,()=>
{
    console.log('server is listening');
})