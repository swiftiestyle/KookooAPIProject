const express = require("express");    
const app= express();
const port= 5000;
var xmlBody = require('./kookoo.js');

app.get('/', function(req, res){
  res.header('Content-Type', 'text/xml');
  res.send(xmlBody.getXMLBody(req));
});

app.listen(port,function(){console.log(`Listening at ${port}`);});
