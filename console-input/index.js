var readline = require('readline');
var request = require('request');

var config = require('../config.json');
var coordinatorHost = config['coordinator-host'];
var coordinatorPort = config['coordinator-port'];
var coordinatorUri = 'http://' + coordinatorHost + ':' + coordinatorPort + '/go';

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('J> ');

rl.prompt();

rl.on('line', function (line) {
  var body = {
    text: line
  };

  console.log('Line = ' + line);

  request.post(coordinatorUri, {
    body: JSON.stringify(body)
  }, function (err, response, body) {
    if (err) {
      console.log('Got error from coordinator:', err);
    }
    if (response) {
      console.log('Got response from coordinator:', response.statusCode);
    }
  });

  rl.prompt();
}).on('close',function () {
    process.exit(0);
});
