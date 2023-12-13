const { Schema, model } = require('mongoose');

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    father:{
        type: String,
        required: true
    },
    mother:{
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    photo:{
        type: String
    },
    studentClass: {
        type: String,
        required: true,
        enum: ["One", "Two", "Three", "Four", "Five"],
        default: "One"
    },
    roll: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Student = model("Student", StudentSchema);

module.exports = Student