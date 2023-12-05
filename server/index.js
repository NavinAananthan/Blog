const express = require('express');

const app = express();

app.post('/register', (request,response)=>{
    const {username,password} = request.body;
    response.json({requestData:{username,password}});
});

app.listen(5000, ()=>{
    console.log('App listening to port: 5000');
});