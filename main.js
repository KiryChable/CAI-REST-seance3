/*var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 
*/

const express = require('express')
const app = express()
var http = require('http').Server(app);

var bobyParser = require('body-parser')
app.use(bobyParser.json())
app.use(bobyParser.urlencoded({
  extended: true
}));

app.get('/',function(req,res){
  res.send('Hello Word!')
})

app.listen(3000,function(){
  console.log('Example app listening on port 3000!')
})

app.post('/',function(req,res){
  res.send('POST request to the homepage')
})

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

var messages=[]

app.route('/beer')
  .get(function(req, res) {
    res.send(messages);
  })
  .post(function(req, res) {
    console.log(req.body);
    var message ={
      username : req.body.username
    }
    messages.push(message);
    res.status(200);
    res.send('Add a beer');
  })
  .put(function(req, res) {
    res.send('Update the beer');
  })
  .delete(function(req, res) {
    res.send('Delete the beer');
  });