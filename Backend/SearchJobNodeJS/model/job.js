
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: String,
    postion: String,
    category: [String],
    jobType:[String],
    salary:Number,
    requirement:String,
    experience:Number,
    jobDescription:String,
    deadLine:Date,
    benefits:String,
    postedDate:{
        type:Date,
        default:Date.now()
    }
});
module.exports=mongoose.model("Job",jobSchema,"jobs");