const express = require('express');
const router  = express.Router()
const { handleJobPost, handleJobDelete, handleJobFind,handleJobFindOne ,handleJobSearch} = require('../controller/jobsController')


router.post('/add',handleJobPost);
router.get('/findone/:id', handleJobFindOne)
router.get('/find', handleJobFind)
router.delete('/delete/:id', handleJobDelete)
router.search('/search/:q' ,handleJobSearch)

module.exports = router;