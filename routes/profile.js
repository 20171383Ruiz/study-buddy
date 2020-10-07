const router = require('express').Router()
const profileService = require('../services/profile')
const isAuth = require('../middleware/is-auth')

router.route('/docente')
.get(profileService.getTeacherProfile);

router.route('/estudiante')
.get(isAuth,profileService.getStudentProfile);

module.exports = router;