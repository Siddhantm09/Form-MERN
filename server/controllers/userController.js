// const User = require('../model/User')

const showFormData = () => {

}
const createUsercontroller = async (req, res) => {
    try {
        const user = await UserModel.create(req.body) //{name: req.body.name, email: req.body.email,age: req.body.age}
        console.log(user);
        return res.json(user)

    } catch (error) {
        console.log(error.message);
    }

}
const updateUsercontroller = () => {

}
const deleteFormData = () => {

}

module.exports = { createUsercontroller, updateUsercontroller, deleteFormData, showFormData }