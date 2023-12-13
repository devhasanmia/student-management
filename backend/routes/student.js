const router = require('express').Router();
const {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudentById,
    deleteStudentById
} = require('../controllers/student');

router.get('/', getAllStudents);
router.put('/:id', updateStudentById);
router.get('/:id', getStudentById);
router.post('/', createStudent);
router.delete('/:id', deleteStudentById);


module.exports = router;