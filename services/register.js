const User = require('../model/user.model')
const passport = require('passport')

exports.getRegisterTeacher = (req, res) => {
    res.render('register/registerTeacher', {
        pageTitle: 'Registrar Docente'
    })
}

exports.postRegisterTeacher = (req, res) => {
    const {
        name
    } = req.body;


    console.log(`Person Name: ${name}`)
}

exports.getRegisterStudent = (req, res) => {
    res.render('register/registerStudent', {
        pageTitle: 'Registrar Estudiante'
    })
}

exports.postRegisterStudent = (req, res) => {
    const {
        username,
        password,
        details
    } = req.body;

    let redirect;

    User.register(new User({
        username: username,
        details: details
    }), password, (err, user) => {
        if (err) {
            console.log(err)
            redirect = '/registrarse/estudiante'
            res.json({
                redirect
            })
        } else {
            redirect = '/perfil/estudiante'
            passport.authenticate("local")(req, res, function () {
                res.json({
                    redirect
                })
            });
        }
    })
}