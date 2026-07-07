const enquiryModel = require("../../models/enquiry.model");


// Insert
const insertEnquiry = (req,resp)=>{
    let {name, email , number , message} = req.body;
    let enquiry = new enquiryModel({
        name,
        email,
        number,
        message
    })
    enquiry.save().then(()=>{
        resp.send({status : 1 , message : "enquiry has been inserted successfully!"});
    }).catch((err)=>{
        resp.send({status : 1 , message : "enquiry while inserted enquiry!"})
    })
}

//Read
const enquiryList =async (req,resp)=>{
    let enquiry = await enquiryModel.find();
    resp.send({
        status  : 1,
        message : enquiry
    })
}

//Delete
const deleteEnquiry = async(req,resp)=>{
    let enquiryId = req.params.id;
    let enquiry = await enquiryModel.DeleteEnquiry({_id : enquiryId});
    resp.send({
        status : 1,
        message : "Enquiry has been deleted:"
    })
}

//Single Row
const SingleEnquiry = async (req,resp)=>{
    let enquiryId = req.params.id;
    let enquiry = await enquiryModel.findOne({_id : enquiryId});
    resp.send({
        status : 1,
        message : enquiry
    })
 }

 //Update
const UpdateEnquiry = async(req,resp)=>{
    let {name , email , number , message} = req.body;
    let updateObj = {
        name,
        email,
        number,
        message
    }
    let enquiryId = req.params.id;
    let enquiry = await enquiryModel.updateOne({_id : enquiryId} ,updateObj);
    resp.send({
        status : 1,
        message :"Enquiry has been updated!",
        enquiry : enquiry
    })
}


module.exports = {insertEnquiry , enquiryList , deleteEnquiry ,SingleEnquiry , UpdateEnquiry}