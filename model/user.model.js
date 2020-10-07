const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema

const detailsSchema = new mongoose.Schema({
    givenName: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    docType: {
        type: String,
        required: true,
        trim: true
    },
    docNum: {
        type: String,
        required: true,
        trim: true
    },
}, {
    _id: false
});

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    details: {
        type: detailsSchema
    }
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema);

module.exports = User;