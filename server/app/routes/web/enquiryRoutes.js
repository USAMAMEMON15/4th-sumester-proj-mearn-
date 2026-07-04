const express = require("express");
const { insertEnquiry, enquiryList, DeleteEnquiry, SingleEnquiry, UpdateEnquiry } = require("../../controllers/web/enquiryController");

const enquiryRouter = express.Router();

//Insert
enquiryRouter.post("/insert" , insertEnquiry)

//Read 
enquiryRouter.get("/" , enquiryList)

//Delete
enquiryRouter.delete("delete/:id" , DeleteEnquiry)

//single
enquiryRouter.get("/single/:id" , SingleEnquiry)

//update
enquiryRouter.put("update/:id" , UpdateEnquiry)

module.exports = enquiryRouter;