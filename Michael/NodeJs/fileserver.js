var fs = require('fs');
var http = require('http');

var port = '9999';
var ip = '127.0.0.1'

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url === '/file.txt') {
      console.log('requesting a file');
    fs.createReadStream(__dirname + '/file.txt').pipe(res);
  } else {
      console.log('not requesting a file');
    res.end("Hello world");
  }
}).listen(port, ip);

console.log('Server running on: ' + ip + ':' + port);