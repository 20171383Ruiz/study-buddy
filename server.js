const express = require('express')
const session = require('express-session')
const passport = require('passport')
const connectDB = require('./config/db')
const User = require('./model/user.model')
require('ejs')

const app = express();

//Inicializar Middleware
app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.use(express.static("public"));

//Llamar EJS

app.set('view engine', 'ejs');

//Sesiones

app.use(session({
    secret: "My secret",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())

app.use(passport.session())

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(User.createStrategy());

//Conectar DB
connectDB();

//RUTAS

app.get('/', (req, res) => {
    res.render('home', {
        pageTitle: "Inicio"
    })
})

app.use('/registrarse/', require('./routes/register'))

app.use('/perfil/', require('./routes/profile'))

app.use(require('./routes/auth'))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running listening on port: ${port}!`);
});

//Run app, then load http://localhost:5000 in a browser to see the output.