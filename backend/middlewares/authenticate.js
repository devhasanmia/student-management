const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const Teacher = require('../model/Teacher');
dotenv.config();

const authenticate = async (req, res, next) => {
    try {
        let token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        token = token.split(' ')[1];
        const validToken = jwt.verify(token, process.env.SECRET_KEY);
        const teacher = await Teacher.findById(validToken.userId);
        if (!teacher) {
            return res.status(404).json({ message: 'User Not Found' });
        }
        req.teacher = teacher;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};

module.exports = authenticate;
