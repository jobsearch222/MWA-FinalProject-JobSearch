const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    
    companyName: String,
    companyLocation: String,
    jobTitle: String,
    JobWorkingSituation: String, // remote,temporary remote, or office
    jobTypeTime:String, // fulltime, parttime, contract, temporary, internship
    numberOfhiresPerRole: Number,// how many people the company needs to hire
    jobShift: String, // 8 hour, 12 hour, 10 hour, day shift, night shift and monday to friday
    salary:Number,
    experienceLevel:String, // Entry level, Mid level, Expert level
    jobDescription:String,
    postedDate:{
        type:Date,
        default:Date.now()
    },
    deadLine:Date,
    address: {
        state: String,
        city: String,
        zipode: Number,
        street: String,
        location: {
            coordinates: {
                type: [Number],
                index: "2dsphere"
            }
        },
    benefits:[String], //Health insurance, Dental insurance, 401(k),Flexible spending account,Paid time off, Vision insurance, Life insurance 
 
    // EmpRepresentative:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'Employeer'
    // }]
}});
module.exports=mongoose.model("Job",jobSchema,"jobs");