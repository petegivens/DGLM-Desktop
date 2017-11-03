var express = require('express')
var path = require('path')
var app = express()
//
//
app.use('/', express.static(path.join(__dirname, '../build/')))
// respond with "hello world" when a GET request is made to the homepage

app.get('/', function (req, res){
  res.send('test')
})

app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname,'../build/index.html'));
  // res.send(path.join(__dirname, '/index.js'));
})
//
// app.use(app.router);
// app.use(express.static(path.join(__dirname, 'public')));?

// app.use("/styles",  express.static(__dirname + '/index.js'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
