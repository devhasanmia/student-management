const Student = require("../model/Student");
const { errorHandler } = require("../utils/error");

// Get All Students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        if (students.length === 0) {
            return res.status(204).json({ message: "Students Not Found" });
        }
        return res.status(200).json({ message: "Students retrieved successfully", Total: students.length, students});
    } catch (error) {
        errorHandler(res, error);
    }
}
// Get a Specific Student by ID
const getStudentById = async (req, res) => {
    try {
    
    } catch (error) {
        errorHandler(res, error)
    }
}
// Create a New Student
const createStudent = async (req, res) => {
    try {
        const { name, father, mother, age, studentClass } = req.body;
        if (!name || !father || !mother || !age || !studentClass) {
            return res.status(404).json({ message: "Field required" })
        }
        const lastStudent = await Student.findOne({ studentClass }).sort({ createdAt: -1 });
        let roll = 1;
        if (lastStudent) {
            roll = lastStudent.roll + 1
        }
        const student = await Student.create({ name, father, mother, age, studentClass, roll })
        return res.status(201).json({ message: "Student Create Success", student })
    } catch (error) {
        errorHandler(res, error)
    }
}
// Update a Student by ID
const updateStudentById = async (req, res) => {
    try {

    } catch (error) {
        errorHandler(res, error)
    }
}
// Delete a Student by ID
const deleteStudentById = async (req, res) => {
    try {

    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudentById,
    deleteStudentById
}