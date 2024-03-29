require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')

//routes imports
const studentRoute = require('./routes/user/student-route')
const teacherRoute = require('./routes/user/teacher-route')
const listeningPagesRoute = require('./routes/listening-route')


//middleware
app.use(express.json())



//main routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/student', studentRoute); 
// app.use('/teacher', teacherRoute);

app.use('/lessons/listening',listeningPagesRoute)






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