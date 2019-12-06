var fs = require('fs');
var child_process = require('child_process');
// console.log(__dirname)
// return;

for(var i = 0; i < 3; i++) {
    var workerProcess = child_process.exec(`node ${__dirname}/process1.js ` + i , function (error, stdout, stderr) {
       if(error) {
           console.log(error.stack);
           console.log('Error code: ' + error.code);
           console.log('Signal received: ' + error.signal);
       }
       console.log('stdout: ', stdout);
       console.log('stderr', stderr);
    });
    workerProcess.on('exit', function (code) {
        console.log('子进程已退出， 退出码' + code);
    });
}