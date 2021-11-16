const objectId = require('mongodb').ObjectId
const JobDetails = require('../models/jobModel')
const employerDetails = require('../models/employerModel')
const jobSeekerDetails = require('../models/jobSeekerModel')



// adding employer to the Employer collection
module.exports.addEmployer = async (req, res) => {
    //console.log(req.body);
    const newEmployer = new employerDetails({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phoneNumber: req.body.phoneNumber,
        companyName: req.body.companyName,
        roleInCompany:req.body.roleInCompany
    })
    await newEmployer.save((error)=>{
         if(error){
         console.log('something went wrong in addEmployer function')
     }else{
         console.log('data is saved')
     }
    });
    res.send({success: 1, payload: newEmployer});
}

// adding job details to the jobs collection
module.exports.addJob = async (req, res) => {
    console.log(req.body);
    const newJob = new JobDetails({

    companyName: req.body.companyName,
    companyLocation: req.body.companyLocation,
    jobTitle: req.body.jobTitle,
    JobWorkingSituation: req.body.JobWorkingSituation, // remote,temporary remote, or office
    jobTypeTime:req.body.jobTypeTime, // fulltime, parttime, contract, temporary, internship
    numberOfhiresPerRole: req.body.numberOfhiresPerRole,// how many people the company needs to hire
    jobShift: req.body.jobShift, // 8 hour, 12 hour, 10 hour, day shift, night shift and monday to friday
    salary:req.body.salary,
    experienceLevel:req.body.experienceLevel, // Entry level, Mid level, Expert level
    jobDescription:req.body.jobDescription,
    postedDate: req.body.postedDate,
    deadLine: req.body.deadLine,
    address: {
        state: req.body.address.state,
        city: req.body.address.city,
        zipode: req.body.address.zipode,
        street: req.body.address.street,
        location: req.body.address.location.coordinates
    },
    benefits:req.body.benefits //Health insurance, Dental insurance, 401(k),Flexible spending account,Paid time off, Vision insurance, Life insurance 
 
    })
    await newJob.save((error)=>{
         if(error){
         console.log('Something went wrong in addJob function')
     }else{
         console.log('data is saved in job collection')
     }
    });
    res.send({success: 1, payload: newJob});
}

// adding jobseeker details to the jobseeker collection
module.exports.addJobSeeker = async (req, res) => {
    console.log(req.body);
    const newJobSeeker = new jobSeekerDetails({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        password:req.body.password
    })
    await newJobSeeker.save((error)=>{
         if(error){
         console.log('Something went wrong in addJobSeeker function')
     }else{
         console.log('data is saved in jobSeeker collection')
     }
    });
    res.send({success: 1, payload: newJobSeeker});
}

// finding job by using companyname
// Query was already executed: error need to come back
module.exports.searchJob = async (req, res) =>{
    try{
        if(!req.body){
            responseObj = {
                "status": "error",
                "msg": "input is missing ",
                "body": {}
            }
            res.status(500).send(responseObj);
        }else{
        //exact match
            await JobDetails.find({jobTitle: {$regex: `^${req.body.search.text.trim()}`, $options:`m`}}, (err, docs)=>{
                if(err){
                    responseObj = {
                        "status": "error",
                        "msg": "input is missing ",
                        "body": {}
                    }
                    res.status(500).send(responseObj);
                }else if(docs.length == 0){
                    console.log("am here")
                    responseObj = {
                        "status": "Error",
                        "msg": "job not available ",
                        "body": {docs}
                    }
            //console.log('I am here');  
            res.status(500).send(responseObj);
                }
                else{
                    responseObj = {
                        "status": "success",
                        "msg": "job found ",
                        "body": {docs}
            }
            res.status(200).send(responseObj);
            }})
    }
    }catch(error){
        console.log("error found in findall function", error)
    }
};


//paginationRecord
module.exports.paginationRecord = async (req, res) =>{
    try{
        if(!req.body){
            responseObj = {
                "status": "error",
                "msg": "input is missing ",
                "body": {}
            }
            res.status(500).send(responseObj);
        }else{

            //pagination
            const currentPage = req.body.currentPage;//2
            const pageSize = req.body.pageSize; //10

            const skip = pageSize * (currentPage-1);
            const limit = pageSize;

            JobDetails.find({}).skip(skip).limit(limit).exec((err, docs) =>{
                if(err){
                    responseObj = {
                        "status": "error",
                        "msg": "input is missing ",
                        "body": {}
                    }
                    res.status(500).send(responseObj);
                }else if(docs.length == 0){
                    responseObj = {
                        "status": "Error",
                        "msg": "job not available ",
                        "body": {docs}
                    }
            //console.log('I am here');  
            res.status(500).send(responseObj);
                }
                else{
                    responseObj = {
                        "status": "success",
                        "msg": "job found ",
                        "body": {docs}
            }
            res.status(200).send(responseObj);
            }})
    }
    }catch(error){
        console.log("error found in findall function", error)
    }
};

// sorting Jobs based on yearly salaray
module.exports.sortRecord = (req, res) => {
        try{
            JobDetails.find({}).sort({salary: 1}).exec((err, docs) => {
                if(err) {
                    responseObj = {
                        "status": "error",
                        "msg": "Error occured.",
                        "body": err
                    }
                    res.status(500).send(responseObj);
                }else{
                    responseObj = {
                        "status": "success",
                        "msg": "Fetch record",
                        "body": docs
                    }
                    res.status(200).send(responseObj);
                }
            })
        }catch(error) {
            console.log('Error', error);
        }
    }



