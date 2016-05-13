var tessel = require('tessel');
var servolib = require('servo-pca9685');
var http = require('http');
var fs = require('fs');
var url = require('url');

var servo = servolib.use(tessel.port['A']);
var position = 0;

var server = http.createServer(function (req, res) {
  var urlParts = url.parse(req.url, true);
  var servoRegex = /servo/;

  console.log(urlParts.pathname);

  if (urlParts.pathname.match(servoRegex)) {
    triggerServo(urlParts.pathname, req, res);
  } else {
    showIndex(urlParts.pathname, req, res);
  }
});

servo.on('ready', function () {
  servo.configure(1, 0.05, 0.12, function (err) {
    console.log(err);
  });
});

server.listen(8080);
console.log('Server running at http://192.168.1.101:8080/');

function showIndex (url, req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});

  fs.readFile(__dirname + '/index.html', function (err, content) {
    if (err) {
      throw err;
    }

    res.end(content);
  });
}

function triggerServo(url, req, res) {
  position += 0.5;
  if (position > 1) {
    position = 0;
  }

  servo.move(1, position);

  res.writeHead(200, {"Content-Type": "application/json"});
  res.end();
}
