require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')

//routes


//middleware
app.use(express.json())



// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});


//mongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        //listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db & listening on port', process.env.PORT)
        })

    })
    .catch(err=>{
        console.log(err)
    })