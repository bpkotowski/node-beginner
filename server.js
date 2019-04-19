const http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('wasssup?');
    response.end();

}).listen(8888);