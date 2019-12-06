var fs = require('fs');
var child_process = require('child_process');

for(var i = 0; i < 3; i++) {
    var workerProcess = child_process.fork(`${__dirname}/process1.js`, [i]);
    workerProcess.on('close', function (code) {
        console.log('子进程已退出，退出码:' + code);
    });
}