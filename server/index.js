const express = require("express");
const app = express();
const mongoose = require("mongoose");
const enquiryRouter = require("./app/routes/web/enquiryRoutes");
const cors = require('cors');
require("dotenv").config();


app.use(cors());
app.use(express.json());

app.use("/api/website/enquiry" , enquiryRouter)
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("mongo db has been connected");
    app.listen(process.env.PORT || 7500 , (()=>{
        console.log("server is runnig on port!");
    }))
}).catch((err)=>{
    console.log("ERROR WHILE CONNECTING TO MONGO DB!");
})