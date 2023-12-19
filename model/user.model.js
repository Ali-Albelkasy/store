const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    role:{type:String,default:'user'}
})

module.exports = mongoose.model('user', userSchema)