const mongoose = require("mongoose")
const schema = mongoose.Schema;

const JobPostSchema = new schema ({
    companyName: String, 
    firstName: String,
    lastName: String,
    companyIndustry: String,
    companySubIndustry: String,
    // date: {
    //     type: String,
    //     default: Date.now()
    // },
    // jobDescription: String,
    // jobAddress: {
    //     city: String,
    //     state: String,
    //     street: String,
    //     locations: [{
    //         longitute: Number,
    //         latitude: Number
    //     }]


    
})



//model
const JobDetails = mongoose.model("JobPostSchema", JobPostSchema);

module.exports = JobDetails;


