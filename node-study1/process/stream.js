var fs = require('fs');
// var data = '';

// var readerStream = fs.createReadStream('./test.json');
// readerStream.setEncoding('UTF8');
// readerStream.on('data', chunk => {
//     data += chunk;
// });
// readerStream.on('end', () => {
//     console.log(data);
// });
// readerStream.on('error', (err) => {
//     console.log(err.stack);
// });
//
// console.log('程序执行完毕！');

// var writeStream = fs.createWriteStream('output.txt');
// var data = '百度网站地址：www.baidu.com';
//
// writeStream.write(data, 'UTF8');
// writeStream.end();
//
// writeStream.on('finish', function () {
//     console.log('写入完成');
// });
//
// writeStream.on('error', err => {
//     console.log(err.stack);
// });
//
// console.log('程序执行完毕');

// var readStream = fs.createReadStream('./web.js');
// var writeStream = fs.createWriteStream('output2.txt');
//
// readStream.pipe(writeStream);
// console.log('程序执行完毕');

// var zlib = require('zlib');
//
// fs.createReadStream('web.js')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('web.js.zip'));
// console.log('文件压缩完成！');

// var zlib = require('zlib');
//
// fs.createReadStream('web.js.zip')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('web-output.js'));

// fs.writeFile('test.zip', 'dfeifjei', function (err) {
//     console.log(err);
// });
// fs.readFile('test.zip', function (err, data) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.toString());
//     console.log('文件读取成功')
// });
// var zlib = require('zlib');
// fs.createReadStream('web.js')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('web.js.zip'));
// console.log('文件已压缩');

// let buf1 = Buffer.from('xyz');
// let buf2 = Buffer.from('abc');
// let len = buf1.length + buf2.length;
// let newBuf = Buffer.alloc(len);
// buf2.copy(newBuf, 0);
// buf1.copy(newBuf, buf2.length);
// console.log(newBuf.toString());
