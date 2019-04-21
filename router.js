
function route(handle, pathname) {
    console.log('to route a request for' + pathname);
    if(typeof handle[pathname] ==='function') {
       return handle[pathname](response);
    } else {
        console.log('no handler found' + pathname);
        return '404 not found'
        response.writeHead(404, { 'Content-Type': 'text/plain'});
        response.write('404 Not found');
        reponse.end();
    }
}

exports.route = route;