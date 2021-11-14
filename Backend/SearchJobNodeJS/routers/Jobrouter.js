const express = require('express');
const router = express.Router()
const { addEmployer, handleJobDelete, handleJobFind,handleJobFindOne ,handleJobSearch} = require('../controller/jobsController')


router.post('/add',addEmployer); // accessible by employer when adding job detials
router.get('/find', handleJobFind) // accessible by jobSeeker when looking for a job
router.delete('/delete/:id', handleJobDelete)// accessible by sys admin to delete expired job post
router.search('/search/:q' ,handleJobSearch)// accessible by jobSeeker when filtering out jobs
router.get('/findone/:id', handleJobFindOne) 

module.exports = router;