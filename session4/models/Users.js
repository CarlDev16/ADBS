const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    firstName: {
        type: String,
         required: [true, "First name is required."]

    },
    lastName: {
        type: String,
         required: [true, "Last name is required."]

    },
    email: {
        type: String,
         required: [true, "Email is required."]
         
    },
    password: {
        type: String,
         required: [true, "Password is required."]
         
    },
    isAdmin: {
        type: String,
         required: [true, "Admin is required."]
         
    },
    mobileNO: {
        type: String,
         required: [true, "Mobile number is required."]
    },
   enrollments: [
        {
            courseId: {
                type: String,
                required: [true, "Course ID is required."]
            },
            enrolledOn: {
                type: Date,
                default: new Date()
            },
            status: {
                type: String,
                default: "Enrolled"
            }
        }
    ]
});

module.exports = mongoose.model("User", userSchema);