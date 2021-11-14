const objectId = require('mongodb').ObjectId
const JobPostSchema = require('../models/job');










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