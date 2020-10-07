const router = require('express').Router()
const registerService = require('../services/register')

router.route('/docente')
.get(registerService.getRegisterTeacher)
.post(registerService.postRegisterTeacher);

router.route('/estudiante')
.get(registerService.getRegisterStudent)
.post(registerService.postRegisterStudent);

module.exports = router;
