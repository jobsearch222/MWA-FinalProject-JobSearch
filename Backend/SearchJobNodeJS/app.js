const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');


const JobDetails = require('./models/job')
const { checkBody} = require ('./middleware/bodycheck')
const router = require('./routers/Jobrouter')
// const {middlwa} =require('./middlewire/connection')
const JobRoute = require('./routers/JobRouter');

const MONGODB_URI = 'mongodb+srv://samuel:samuel@cluster0.ll7sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
.then(() => {
        const app = express();
        app.set('strict routing', true);
        app.set('case sensitive routing', true);
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use('/Job', JobRoute)
        app.listen(3000, () => {
            console.log("Server has started on port 4444")
        });
    })


    // to verify mongoose has successfully connected to the database
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected');
})









const app = express();
app.use(express.json())

// app.use(middlwa);
// app.use(checkBody);
// app.use('/',router )



const data = {
    companyName: "MIU", 
    firstName: "Samuel",
    lastName: "Tewelde",
    companyIndustry: "Collage",
    companySubIndustry: "Computer Science",
}

const newPostJob = new JobDetails(data);

 newPostJob.save((error) =>{
     if(error){
         console.log('something went wrong')
     }else{
         console.log('data is saved')
     }
 })

app.get('/', function(req, res){



    res.send('ok');
})


app.all('*', (req, res, next) => {
    next(new Error(`No route found`))
})

app.use(function (err, req, res, next) {
    res.status(req.error || 400).json({ msg: err.message })
})

app.listen(4444, () => console.log(`listening on 4444`))
