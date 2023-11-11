const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const ToDoRoute = require('./ToDoRoute')
require('dotenv').config()


const MongoURL = process.env.MongoURL

const app = express()

//MIDDLE-WARE TO RECEIVE A BODY REQUEST
app.use(cors());
app.use(express.json());


app.use('/todo', ToDoRoute)


const port = 6000

const start = async() => {
    try {
        await mongoose.connect(MongoURL)
        console.log("To-Do Connected...");

        app.listen(port, 'localhost', function () {
            console.log("Server is running on a port", port);
        })
    } 
    catch (error) {
        console.log(error);
    }
};

start();