const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const taskRoutes = require("./routes/taskRoutes.js");

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//default end point
app.use("/tasks", taskRoutes);

//MongoDB connection
mongoose.connect("mongodb+srv://admin:admin123@ua-db.q6qpukd.mongodb.net/TASK-MANAGEMENT");
let db = mongoose.connection;
db.on("error", () => console.log("Cannot connect ot mongoDB"));
db.once("open",() => console.log("You are now connected to mongoDB Compass."));

//mongodb+srv://admin:admin123@ua-db.q6qpukd.mongodb.net/TASK-MANAGEMENT")

app.listen(port, () => 
    console.log(`Server is running at port ${port}.`)
);



//Client Request (Features of the Task Management App)

// //Insert or add a task
// app.post("/tasks/add", (req, res) => {
//     Task.findOne({taskName: req.body.taskName})
//     .then((result, err) => {
//         if(result != null && result.taskName == req.body.taskName){
//             return res.status(200).send({
//                 code: 200,
//                 message: "Oops! Duplicate task found!",
//                 data: result
//             })
//         }else{
//             let newTask = new Task({
//                 taskName: req.body.taskName
//             })

//             newTask.save().then((savedTask, err) => {
//                 if(err){
//                     return res.send({
//                         code: 200,
//                         message: "There is a problem while saving the task."
//                     })
//                 }else{
//                     return res.status(201).send({
//                         code: 201,
//                         message: `${req.body.taskName.toUpperCase()} is now added!`
//                     })
//                 }
//             })
//         }
//     })
// })









