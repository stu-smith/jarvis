var express = require('express');
var app = express();
var cors = require('cors');
var http = require('http').Server(app);
var config = require('../config.json');
var port = config['coordinator-port'];

app.use(cors());

app.get('/status', function (req, res) {
  res.header('Content-Type', 'text/plain');
  res.end('OK');
});

app.post('/go', function (req, res) {
  res.status(204).end();
});

http.listen(port, function () {
  console.log('[i] coordinator listening on *:' + port);
});
