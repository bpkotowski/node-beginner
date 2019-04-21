/* eslint-disable no-console */
const http = require('http');
const url = require('url');


function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('request' + pathname + 'received');
    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(8888);
  console.log('server is running');

}
exports.start = start;
