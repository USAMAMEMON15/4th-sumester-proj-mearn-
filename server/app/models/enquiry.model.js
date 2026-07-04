const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },

    email : {
            type : String,
            required : true
    },
    number : {
        type : Number,
        require : true
    },
    message :{
        type : String,
        required : true
    },
})

let enquiryModel = mongoose.model("enquiry" , enquirySchema);
module.exports = enquiryModel;