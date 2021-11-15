const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeerSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    roleInCompany:{
        type: String
    }

    });

module.exports = mongoose.model("Employeer",employeerSchema,"employeers");