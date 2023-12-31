const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv:url')


app.post('/register', (request,response)=>{
    const {username,password} = request.body;
    response.json({requestData:{username,password}});
});

app.listen(5000, ()=>{
    console.log('App listening to port: 5000');
});
