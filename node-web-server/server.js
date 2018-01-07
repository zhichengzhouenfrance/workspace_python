const express = require('express');

var app =  express();

app.get("/", (request, response) => {
    //reponse.send('hello express');
    response.send({
      'id': 1,
      'name':  'zhicheng'
    })
});

app.get("/bad", (request, response) => {
    //reponse.send('hello express');
    response.send({
      'errorMessage': 'unable to handle request'
      })
});

app.listen(3000);
