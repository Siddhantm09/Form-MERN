const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createUsercontroller, showAllUserController, updateUsercontroller, getUserController, deleteFormData } = require('./controllers/userController');

dotenv.config('./.env')
const app = express();


//middlewares
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json());

//Parse json data so that we can use it in req obj
app.use(cors())
app.use(morgan('common'))//Shows info of API you hit



app.get('/', showAllUserController)
app.post("/createUser", createUsercontroller)
app.get('/getUser/:id', getUserController)
app.put('/updateUser/:id', updateUsercontroller)
app.delete('/deleteUser/:id', deleteFormData)






const PORT = 3001;
dbConnect()

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})
