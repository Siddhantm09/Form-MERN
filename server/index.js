const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');
const cors = require('cors');
const { createUsercontroller } = require('./controllers/userController');

dotenv.config('./.env')
const app = express();

//middlewares
app.use(express.json()); //Parse json data so that we can use it in req obj
app.use(morgan('common'))//Shows info of API you hit
app.use(cors())

//controllers

app.post("/create", createUsercontroller)





const PORT = 3001;
dbConnect()

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})
