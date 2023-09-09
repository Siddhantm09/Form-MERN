const UserModel = require('../model/User')

const showAllUserController = async (req, res) => {
    const users = await UserModel.find({})
    res.send(users);
}

const createUsercontroller = async (req, res) => {
    try {
        const user = await UserModel.create(req.body) //{name: req.body.name, email: req.body.email,age: req.body.age}
        // res.json(user)
        res.send(user);

    } catch (error) {
        console.log(error.message);
    }

}
const getUserController = async (req, res) => {
    const id = req.params.id
    const user = await UserModel.findById({ _id: id })
    res.send(user);
}

const updateUsercontroller = async (req, res) => {
    const id = req.params.id

    const user = await UserModel.findById({ _id: id })
    user.name = req.body.name
    user.email = req.body.email
    user.age = req.body.age
    user.save()
}
const deleteFormData = () => {

}

module.exports = { createUsercontroller, updateUsercontroller, deleteFormData, showAllUserController, getUserController }