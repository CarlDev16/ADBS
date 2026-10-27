const Task = require("../models/Task.js");

module.exports.createTask = (reqBody) => {
    return Task.findOne({ taskName: reqBody.taskName })
        .then((result, err) => {
            if (result != null && result.taskName == reqBody.taskName) {
                return {
                    code: 200,
                    message: "Oops! Duplicate task found!",
                    data: result
                }
            } else {
                let newTask = new Task({
                    taskName: reqBody.taskName
                })

                return newTask.save().then((savedTask, err) => {
                    if (err) {
                        return {
                            code: 200,
                            message: "There is a problem while saving the task."
                        }
                    } else {
                        return {
                            code: 201,
                            message: `${reqBody.taskName.toUpperCase()} is now added!`
                        }
                    }
                })
            }
        }).catch(err => {
            return {
                code: 500,
                message: "There is a problem while saving the task."
            }
        })
}

module.exports.getAllTasks = () => {
    return Task.find({}).then(result => {
        if (result.length == 0 || result == []) {
            return {
                code: 200,
                message: "There is no Task added yet."
            }
        } else {
            return {
                code: 200,
                message: "Getting all tasks. Success!",
                data: result
            }


        }
    })
}

module.exports.getSpecificTask = (taskId) => {
    return Task.findById(taskId).then((result, err) => {
        if(err){
            return{
                code: 500,
                message: "ERROR: cannot find task using that ID."
            }
        }else{
            return{
                code: 200,
                message: "SUCCESS: Task Found.",
                data: result                
            }
        }
    })
}

module.exports.archiveTask = (taskId) => {
    return Task.findByIdAndUpdate(taskId, { isActive: false }, { new: true }).then((result, err) => {
        if (err || !result) {
            return {
                code: 500,
                message: "ERROR: Failed to archive task."
            }
        } else {
            return {
                code: 200,
                message: "SUCCESS: Task Archived.",
                data: result
            }
        }
    });
};

module.exports.unarchiveTask = (taskId) => {
    return Task.findByIdAndUpdate(taskId, { isActive: true }, { new: true }).then((result, err) => {
        if (err || !result) {
            return {
                code: 500,
                message: "ERROR: Failed to unarchive task."
            }
        } else {
            return {
                code: 200,
                message: "SUCCESS: Task Unarchived.",
                data: result
            }
        }
    });
};

module.exports.deleteTask = (taskId) => {
    return Task.findByIdAndDelete(taskId).then((result, err) => {
        if (err || !result) {
            return {
                code: 500,
                message: "ERROR: Failed to delete task."
            }
        } else {
            return {
                code: 200,
                message: "SUCCESS: Task Deleted.",
                data: result
            }
        }
    });
};