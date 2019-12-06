let cp = require('child_process');
let child = cp.fork('./child');

child.on('message', function (msg) { //接收来自子进程的信息
    console.log('got a message is ', msg);
});

child.send('hello node!'); // 给子进程发送信息

setTimeout(() => {
    child.send('ok?');
    child.disconnect();
    console.log('中断父子进程间的通信');
}, 5000);