const exec = require('child_process').exec;


function start(response) {
    console.log('rh start was called');

 const body =  `<html>`+
 5 `<head>`+
 6 `<meta http-equiv="Content-Type" content="text/html; `+
 7 `charset=UTF-8" />`+
 8 `</head>`+
 9 `<body>`+
 10 `<form action="/upload" method="post">`+
 11 `<textarea name="text" rows="20" cols="60"></textarea>`+
 12 `<input type="submit" value="Submit text" />`+
 13 `</form>`+
 14 `</body>`+
 15 `</html>`; 
    
 response.writeHead(200, (error, stdout, stderr));
 response.write(stdout);
 response.end();
   
}



function upload() {
    console.log('rh upload was called');
    response.writeHead('hey upload');
    response.end();
}

exports.start = start;
exports.upload = upload;