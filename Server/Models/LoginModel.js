const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    Username: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {

    },
    cart: {
        type: Array
    }
})

const loginusers = new mongoose.model('users', Schema)

module.exports = loginusers;