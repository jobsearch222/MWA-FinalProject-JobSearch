const objectId = require('mongodb').ObjectId
const JobDetails = require('./models/jobModel')
const employerDetails = require('./models/employerModel')
const jobSeekerDetails = require('./models/jobSeekerModel')


module.exports.addEmployer = async (req, res) => {
    console.log(req.body);

    const newEmployer = new employerDetails({
        repName: req.body.repName,
        email: req.body.email,
        companyName: req.body.companyName,
        phoneNumber: req.body.phoneNumber,
        address: {
            state: req.body.address.state,
            city: req.body.address.city,
            zipode: req.body.address.zipode,
            street: req.body.address.street,
            location:req.body.address.location,
        },
        jobs: req.body.jobs  //newPostJob._id
    })
    await newEmployer.save((error)=>{
         if(error){
         console.log('something went wrong')
     }else{
         console.log('data is saved')
     }
    });
    res.send({success: 1, payload: newEmployer});


}

 

// // data about the job
// const jobdata = {
//     title: "Bank of Eritrea",
//     postion: "Human Resources",
//     category: ["null", "other null", "third null"],
//     jobType:["Java Developer"],
//     salary:120000,
//     requirement:"Angular and spring knowledge",
//     experience:4,
//     jobDescription:"full time job at califorina downtown",
//     deadLine:12/11/2021,
//     benefits:"bonus if hired",
//     // EmpRepresentative:newEmployer._id

// }
// // inserting data to job collection
// const newPostJob = new JobDetails(jobdata);

//  newPostJob.save((error) =>{
//      if(error){
//          console.log('something went wrong')
//      }else{
//          console.log('data is saved')
//      }
//  })










// module.exports.addJob = async (req, res) => {
//     console.log(req.body);
//     const course = new Course({
//         name: req.body.name,
//         code: req.body.code,
//     })
//     await course.save();
//     res.send({ success: 1, payload: course });

// }

// module.exports.addJobSeeker= async (req, res) => {
//     console.log(req.body);
//     const course = new Course({
//         name: req.body.name,
//         code: req.body.code,
//     })
//     await course.save();
//     res.send({ success: 1, payload: course });

// }





















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