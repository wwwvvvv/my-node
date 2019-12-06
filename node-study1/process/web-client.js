var http = require('http');

//请求的选项
var options = {
    host: 'localhost',
    port: 8082,
    path: '/index.html'
};

// 处理响应的回调函数
var callback = function (response) {
  var body = '';
  // 不断更新的数据
  response.on('data', function (data) {
     body += data;
  });

  response.on('end', function () {
      // 数据接受完成
      console.log(body);
  });
};

var req = http.request(options, callback);
req.end();