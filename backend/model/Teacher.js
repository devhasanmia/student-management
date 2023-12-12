const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    nid: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approve'],
        default: 'pending',
    },
}, { timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
