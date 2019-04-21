
function route(handle, pathname, response, postData) {
    console.log('to route a request for' + pathname);
    if(typeof handle[pathname] ==='function') {
       return handle[pathname](response), postData;
    } else {
        console.log('no handler found' + pathname);
        response.writeHead(404, { 'Content-Type': 'text/plain'});
        response.write('404 Not found');
        reponse.end();
    }
}

exports.route = route;