const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const jobSeekerSchema= new Schema({
     email:{
         type:String,
         required:true,
     },
     password:{
         type:String,
         required:true,
         hide:true
     }
});
//mongoose.model(modelName, schema):...to convert schema to model
module.exports=mongoose.model('JobSeeker',jobSeekerSchema,"jobSeekers");