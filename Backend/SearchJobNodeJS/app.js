
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
// const JobDetails = require('./models/jobModel')
// const employerDetails = require('./models/employerModel')
// const jobSeekerDetails = require('./models/jobSeekerModel')
const JobRoute = require('./routers/JobRouter');

const MONGODB_URI = 'mongodb+srv://samuel:samuel@cluster0.ll7sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// start connection with database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
.then(() => {
        const app = express();

        // config
        app.set('strict routing', true);
        app.set('case sensitive routing', true);

        //middleware
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));


        //routing
        app.use('/Job', JobRoute)





        // error handler
        app.all('*', (req, res, next) => {
            next(new Error(`No route found`))
        })
        app.use(function (err, req, res, next) {
            res.status(req.error || 400).json({ msg: err.message })
        })

        // start server 
        app.listen(3000, () => {
            console.log("Server has started on port 3000")
        });
    })
    // to verify mongoose has successfully connected to the database
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected');

})