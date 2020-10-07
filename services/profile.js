exports.getTeacherProfile = (req, res) => {
    res.render('profile/profileTeacher', {
        pageTitle: 'Perfil Docente'
    })
}


exports.getStudentProfile = (req, res) => {
    res.render('profile/profileStudent', {
        pageTitle: 'Perfil Estudiante',
        user: req.user
    })
}