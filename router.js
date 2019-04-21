
function route(handle, pathname) {
    console.log('to route a request for' + pathname);
    if(typeof handle[pathname] ==='function') {
       return handle[pathname]();
    } else {
        console.log('no handler found' + pathname);
        return '404 not found'
    }
}

exports.route = route;