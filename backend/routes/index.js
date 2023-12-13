const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');
const auth = require("./auth");
const student = require('./student')

router.use('/api/v1/auth', auth);
router.use('/api/v1/students', authenticate, student);

module.exports = router