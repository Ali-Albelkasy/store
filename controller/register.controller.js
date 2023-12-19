const userModel = require("../model/user.model")

module.exports = async (req, res) => {
    const { name, email, phone, password, rePassword } = req.body
    try {
        const user = await userModel.findOne({ email })
        if (user) {
            res.json({ message: 'email already exist', oldInput: { name, email, phone, password } })
        } else {
            const users = await userModel.insertMany({ name, email, phone, password })
            res.json({ message: 'done', users })
        }
    } catch (error) {
        res.json({message:'catch error in code'})
    }
}