const express = require('express');

const app = express();

app.get('/test', (request,response)=>{
    response.json('test ok')
});

app.listen(5000, ()=>{
    console.log('App listening to port: 5000');
});