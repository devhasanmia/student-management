const Teacher = require("../model/Teacher");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const SALT_ROUNDS = 10;
const TOKEN_EXPIRATION_TIME = '1h';

const register = async (req, res) => {
    try {
        const { name, email, password, nid, age, status } = req.body;
        const existingTeacher = await Teacher.findOne({ email });

        if (existingTeacher) {
            return res.status(409).json({ message: "Teacher already exists" });
        }

        const hash = await bcrypt.hash(password, SALT_ROUNDS);
        const newTeacher = await Teacher.create({
            name,
            email,
            password: hash,
            nid,
            age,
            status,
        });

        return res.status(200).json({
            message: "Registration successful",
            teacher: newTeacher,
        });

    } catch (error) {
        console.error(error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: "Validation Error", error: error.message });
        }

        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const teacher = await Teacher.findOne({ email });

        if (!teacher) {
            return res.status(404).json({ message: "Invalid email address" });
        }

        const matchPassword = await bcrypt.compare(password, teacher.password);
        
        if (!matchPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        if (!process.env.SECRET_KEY) {
            console.error("Secret key not defined!");
            return res.status(500).json({ message: "Internal Server Error" });
        }

        const token = jwt.sign({ userId: teacher._id, email: teacher.email }, process.env.SECRET_KEY, { expiresIn: TOKEN_EXPIRATION_TIME });

        return res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    register,
    login
};
