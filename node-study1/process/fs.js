var fs = require('fs');
var path = require('path');
// var buf = new Buffer.alloc(1024);

// fs.stat('./child.js', function (err, stats) {
//     console.log('stats', stats.isFile());
// });
// return;

// fs.open('./child.js', 'r', function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('文件打开成功！');
//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//        if (err) {
//            console.log(err);
//            return;
//        }
//        console.log(bytes + ' 字节被读取');
//        if (bytes > 0) {
//            console.log(buf.slice(0, bytes).toString());
//        }
//     });
// });

// fs.readFile('./parent.js', function (err, data) {
//     console.log('异步读取文件数据：', data.toString());
// });

// fs.readFile("./test.json", function (err, data) {
//     let rs = JSON.parse(data);
//     console.log(rs.a);
// })
//
// fs.readFile('./ip.xlsx', function (err, data) {
//     let rs = Buffer.from(data);
//     console.log(rs.toJSON());
// });
// var writeFileData = `const Time = new Date();\n module.exports.time = Time;`;
// fs.writeFile('./test.js', writeFileData, function (err) {
//     console.log(err);
// });
// var obj = {
//     a: 'b',
//     c: 'd',
//     e: 'f',
//     g: 'g',
//     end: {
//         time: Date.now(),
//         author: 'UNTITLED'
//     }
// };
//
// fs.writeFile('./test2.json', JSON.stringify(obj), function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('文档写入成功！');
// });
// fs.mkdir('./../test', function (err) {
//    if(err) {
//        return console.error(err);
//    }
//    console.log('文件夹创建！')
// });
// fs.readdir('./', function (err, files) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('files', files);
// });
// fs.rmdir('./../test', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('文件夹删除成功');
// });

// fs.unlink('./test.js', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('文件删除成功！');
// });

// fs.rename('./../process', './../test', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('rename success');
// });

console.log(path.resolve(__dirname, '../test'));