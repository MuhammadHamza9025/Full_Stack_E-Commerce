


const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    id: {
        type: Number,

    },
    name: {
        type: String,

    },
    old_price: {
        type: Number,

    },
    new_price: {
        type: Number,

    },
    category: {
        type: String,

    },
    image: {
        type: String

    }

});


const Users = new mongoose.model('Carts', Schema)

module.exports = Users;