var express = require('express');
var app = express();
var cors = require('cors');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var config = require('../config.json');
var port = config['display-server-port'];

app.use(cors());
app.use('/static', express.static(__dirname + '/static'));

io.on('connection', function (socket) {
  console.log('a user connected');
});

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/status', function (req, res) {
  res.header('Content-Type', 'text/plain');
  res.end('OK');
});

http.listen(port, function () {
  console.log('[i] display-server listening on *:' + port);
});
