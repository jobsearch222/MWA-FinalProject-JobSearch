const express= require('express');
const mongoose = require('mongoose');

const app=express();

mongoose.connect('mongodb+srv://admin:admin1230@cluster0.zhsxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',()=>{
    console.log('connected to database');
   });
   
   app.use(require('body-parser').urlencoded({ extended: false }));
   app.use(express.json());



   app.listen(3000,()=>{
    console.log('listening on server 3000');
})