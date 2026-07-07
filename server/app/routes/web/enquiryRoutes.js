const express = require("express");
const { insertEnquiry, enquiryList, SingleEnquiry, UpdateEnquiry, deleteEnquiry } = require("../../controllers/web/enquiryController");

const enquiryRouter = express.Router();

//Insert
enquiryRouter.post("/insert" , insertEnquiry)

//Read 
enquiryRouter.get("/" , enquiryList)

//Delete
enquiryRouter.delete("/delete/:id" , deleteEnquiry)

//single
enquiryRouter.get("/single/:id" , SingleEnquiry)

//update
enquiryRouter.put("update/:id" , UpdateEnquiry)

module.exports = enquiryRouter;