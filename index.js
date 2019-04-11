const express = require("express");    
const favicon = require('serve-favicon');
const app= express();
const port= 5000;
var xmlBody = require('./kookoo.js');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.get('/', function(req, res){
  res.header('Content-Type', 'text/xml');
  res.send(xmlBody.getXMLBody(req));
});

app.listen(port,function(){console.log(`Listening at ${port}`);});
