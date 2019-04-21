const http = require('http');
const url = require('url');


function start(route, handle) {
    function onRequest(request, response) {
        var postData = '';
        var pathname = url.parse(request.url).pathname;
        console.log('request' +  pathname + 'received');
        
        request.setEncoding('utf8');

        request.addListener('data', function(postDataChunk) {
            postData = postDataChunk;
            console.log('recieved POST data chunk' + postDataChunk + '');
        });

        request.addListener('end', function() {
            route(handle, pathname, response, postData);

        });
        
        
       
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