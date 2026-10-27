const express = require("express");
const router = express.Router ();
const taskControllers = require("../controllers/taskControllers.js");

router.post("/add", (req, res) => {
    taskControllers.createTask(req.body).then(result => res.send(result))  
})

router.get("/all", (req, res) => {
    taskControllers.getAllTasks().then(result => {
        res.send(result);
    })
})

//GET SPECIFIC/ONE TASK

router.get("/:id", (req, res) => {
    taskControllers.getSpecificTask(req.params.id).then(result => {
        res.send(result);
    })
})

//Archive Task
router.put("/archive/:id", (req, res) => {
    taskControllers.archiveTask(req.params.id).then(result =>
         {
        
        res.send(result);
    })
})

//Unarchive
router.put("/unarchive/:id", (req, res) => {
    taskControllers.unarchiveTask(req.params.id).then(result => {
        res.send(result);
    });
});

//Delete
router.delete("/delete/:id", (req, res) => {
    taskControllers.deleteTask(req.params.id).then(result => {
        res.send(result);
    });
});

module.exports = router;
