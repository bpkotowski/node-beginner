function start() {
    console.log('rh start was called')
    return 'hey start';
}

function upload() {
    console.log('rh upload was called');
    return 'hey upload'
}

exports.start = start;
exports.upload = upload;