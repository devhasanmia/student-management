const router = require('express').Router();
const {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudentById,
    deleteStudentById
} = require('../controllers/student');

router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudentById);
router.post('/', createStudent);
router.delete('/:id', deleteStudentById);


module.exports = router;