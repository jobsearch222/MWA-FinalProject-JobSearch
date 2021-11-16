const express = require('express');
const router = express.Router()
const { addEmployer, addJob, fetchAllJobs,addJobSeeker, sortRecord, searchJob, paginationRecord, filterOut, handleJobFindOne ,handleJobSearch} = require('../controller/jobsController')

router.get('/jobs', fetchAllJobs);
router.post('/add/Employer',addEmployer); // accessible by employer when adding his/her detials
router.post('/add/JobDetails',addJob) // accessible by employer when adding job details
router.post('/add/JobSeekers', addJobSeeker) // accessible by jobSeeker when looking for a job
router.post('/Search', searchJob) // searchs jobs based on company name
router.post('/pagiRecords', paginationRecord)
router.get('/sortRecord', sortRecord)







//router.get('/filterOut', filterOut)
// router.delete('/delete/:id', handleJobDelete)// accessible by sys admin to delete expired job post
// router.search('/search/:q' ,handleJobSearch)// accessible by jobSeeker when filtering out jobs
// router.get('/findone/:id', handleJobFindOne) 

module.exports = router;