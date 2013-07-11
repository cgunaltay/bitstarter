var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buf = new Buffer(256);
buf = fs.readFileSync('index.html','utf8', function (err, data) {
  console.log(data);
});


app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
