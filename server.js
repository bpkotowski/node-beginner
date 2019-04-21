const http = require('http');
const url = require('url');


function start(route, handle) {
    function onRequest(request, response) {
        const pathname = url.parse(request.url).pathname;
        console.log('request' +  pathname + 'received');
            

        
        response.writeHead(200, {'Content-Type': 'text/plain'});
        const content = route(handle, pathname);
        response.write('Salut, ca va bien?');
        response.end();
    
    }
    
    http.createServer(onRequest).listen(8888);
     console.log('server is running')
    
}
exports.start = start;
// function parlez(mot) {
//     console.log(mot);
// }

// function execute(someFunction, value) {
//     someFunction(value);
// }

// execute(parlez, "salut");