var http = require('http');

var port = '9999';
var ip = '127.0.0.1'

http.createServer(function (req, res) {
    
    console.log('We got a request!');
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(port, ip);

console.log('Server running on: ' + ip + ':' + port);