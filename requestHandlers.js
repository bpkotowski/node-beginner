const exec = require('child process').exec;


function start() {
    console.log('rh start was called')
    function sleep(milliseconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime +  milliseconds);
    }

    sleep(40000);
    consloe>log('HEY start');
}



function upload() {
    console.log('rh upload was called');
    return 'hey upload'
}

exports.start = start;
exports.upload = upload;