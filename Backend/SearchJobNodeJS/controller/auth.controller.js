const jobSeekerModel = require('../models/jobSeekerModel');
const jobModel = require('../models/jobModel');
const employerModel = require('../models/employerModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { STATUS_SUCCESS, STATUS_ERROR, SECRET_KEY } = require('../common/constants');





function empLoginController (req, res, next) {
    employerModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            next(err);
        } else if (user == null) {
            res.status(404).json({
                status: STATUS_ERROR,
                payload: {
                    message: 'user not found'
                }
            });
        } else {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({ id: user._id }, req.app.get(SECRET_KEY), { expiresIn: '24h' });
                res.json({
                    status: STATUS_SUCCESS,
                    payload: {
                        access_token: token
                    }
                });
            } else {
                res.status(400).json({
                    status: STATUS_ERROR,
                    payload: {
                        message: 'invalid credentials'
                    }
                })
            }
        }
    })
};



function jobSeekerLoginController (req, res, next) {
    jobSeekerModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            next(err);
        } else if (user == null) {
            res.status(404).json({
                status: STATUS_ERROR,
                payload: {
                    message: 'user not found'
                }
            });
        } else {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({ id: user._id }, req.app.get(SECRET_KEY), { expiresIn: '24h' });
                res.json({
                    status: STATUS_SUCCESS,
                    payload: {
                        access_token: token
                    }
                });
            } else {
                res.status(400).json({
                    status: STATUS_ERROR,
                    payload: {
                        message: 'invalid credentials'
                    }
                })
            }
        }
    })
};


module.exports = {
    employerLogin: empLoginController,
    jobSeekerLogin: jobSeekerLoginController,
};
