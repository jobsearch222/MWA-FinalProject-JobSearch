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


module.exports.filterOut = async (req, res) =>{
    console.log(req.body);
    
}




















// module.exports.handleJobPost = async (req, res) => {
//     // try {
//         const data=req.body;
//         // console.log(data);
//          await  req.db.insertOne(req.body)
//           res.json(req.body)
//     // } catch (e) {
//     //     next(e)
//     // }
// }

// module.exports.handleJobDelete = (req, res, next) => {
//     const query = req.params.id
//     req.db.deleteOne({_id :objectId(query) },function(err,result){
//         if(err){
//             return res.status(500).status(err)
//         }
//         res.json(result);
        
//     })

// }
// module.exports.handleJobFind = (req, res, next) => {
//     req.db.find().toArray(function(err, doc){
//         console.log(doc);
//         res.status(200).json(doc) 
//     })
// }
// // const getStudentById = async (req,res) =>{
// //     const { id } = req.params;
// //     let result = await req.db.collection('student').findOne({ _id: ObjectId(id) });
// //     res.json(result);
// // }

// module.exports.handleJobFindOne = async (req, res) => {
//     const { id } = req.params;
//     let result = await req.db.findOne({_id: objectId(id)});
//     res.json(result);
//     // const newid = req.params.id
//     // // console.log(`_id-----------------------------${newid}`)
//     // req.db.findOne({ _id: newid }, (error, result) => {
//     //     if(error) {
//     //         return res.status(500).send(error);
//     //     }
//     //     res.status(200).json(result);
//     // });
// }

// module.exports.handleJobSearch = async (req, res,next)=>{

//     // req.db.find().toArray(function(err, doc){
//     //     console.log(doc);
//     //     res.status(200).json(doc)
       
//     // })

//     const query = req.params.q
//     // console.log(req.params.q)
//     // req.db.find({name : query}).toArray(function(err,result){
//     //     if(result == null){
//     //      return   res.status(500).status('not found')
//     //     }
//     //     res.status(200).json(result)
//     // })

//     req.db.find({name: query}).toArray(function(err, doc){
//         res.send(result)
//     })

// }