const User = require('../model/user.model')
const passport = require('passport')

exports.getLogIn = (req, res) => {
    res.render('auth/login', {
        pageTitle: 'Inciar Sesion'
    });
};

exports.postLogIn = (req, res) => {
    const {
        username,
        password
    } = req.body;

    const user = new User({
        username: username,
        password: password
    });

    req.login(user, function (err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/perfil/estudiante");
            });
        }
    });
};