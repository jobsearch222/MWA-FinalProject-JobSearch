const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeerSchema = new Schema({
    repName: String,
    email: String,
    companyName: {
        type: String,
        required: true
    },
    phoneNumber: Number,
    address: {
        state: String,
        city: String,
        zipode: Number,
        street: String,
        location: {
            coordinates: {
                type: [Number],
                index: "2dsphere"
            }
        }
    },
    jobs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job'
    }]
});

module.exports = mongoose.model("Employeer",employeerSchema,"employeers");