const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');
const cors = require('cors');
const { createUsercontroller, showAllUserController, updateUsercontroller, getUserController } = require('./controllers/userController');

dotenv.config('./.env')
const app = express();


//middlewares
app.use(express.json()); //Parse json data so that we can use it in req obj
app.use(morgan('common'))//Shows info of API you hit
app.use(cors())


app.get('/', showAllUserController)
app.post("/createUser", createUsercontroller)
app.get('/getUser/:id', getUserController)
app.put('/updateUser/:id', updateUsercontroller)






const PORT = 3001;
dbConnect()

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})
