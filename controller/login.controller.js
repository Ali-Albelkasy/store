const userModel = require("../model/user.model")
const jwt = require('jsonwebtoken')
module.exports = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email })
        if (user) {
            if (password!=user.password) {
                res.json({ message: 'The password is incorrect',oldInput:{ email, password }})
            } else {
                const token = jwt.sign({ name: user.name, id: user._id, role: user.role }, 'Secret_token')
                res.json({ message: 'done' ,token})
            }
        } else {
            res.json({message:'email dosen`t exist',oldInput:{email,password}})
        }
    } catch (error) {
        res.json({message:'catch error in code'})
    }
}