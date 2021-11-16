const router = require('express').Router();
const controllers = require('../controller/auth.controller');

router.post('/login/jobSeeker', controllers.employerLogin);
router.post('/login/employer', controllers.jobSeekerLogin);

module.exports = router;
