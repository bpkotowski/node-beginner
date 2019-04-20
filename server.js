const http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Salut, ca va?');
    response.end();
}).listen(8888);



function parlez(mot) {
    console.log(mot);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(parlez, "salut");