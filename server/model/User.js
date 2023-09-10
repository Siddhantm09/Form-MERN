const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    image: String


})
module.exports = mongoose.model('user', UserSchema)