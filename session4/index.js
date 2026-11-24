const express = require("express");
const mongoose = require("mongoose");
const port = 4000;

const app = express(); 

//midlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//MongoDB connection
mongoose.connect("mongodb+srv://admin:admin123@ua-db.q6qpukd.mongodb.net/COURSE-ENROLMENT");
let db = mongoose.connection;
db.on("error", () => console.log("Cannot connect ot mongoDB"));
db.once("open",() => console.log("You are now connected to mongoDB Compass."));

//port listening
app.listen(port, () => console.log(`API is now live at port ${port},`));

