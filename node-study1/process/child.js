process.on('message', function (msg) { // 接收信息
    process.send(msg); // 发送信息
    console.log("got a message from parent process: ", msg);
});