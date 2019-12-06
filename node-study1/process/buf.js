// var buf = Buffer.from('abcdefg', 'ascii');
// console.log(buf);
// console.log(buf.toString('ascii'));

// const buf1 = Buffer.alloc(10); //
// const buf2 = Buffer.alloc(10, 1);
// const buf3 = Buffer.allocUnsafe(10);
// const buf4 = Buffer.from([1,2,3]);
// const buf5 = Buffer.from('tést');
// const buf6 = Buffer.from('tést', 'latin1');
// console.log(buf6);
// console.log(buf3);
// console.log(buf4);

// const buf = Buffer.alloc(256);
// let len = buf.write('http://www.runoob.com');
// console.log(len);
// console.log(buf.toString());
// const buf = Buffer.alloc(26);
// for (var i = 0; i < 26; i++) {
//     buf[i] = i + 97;
// }
// console.log(buf.toString('ascii'));
// console.log(buf.toString('ascii', 0, 5));
// console.log(buf.toString('utf8', 0, 5));
// console.log(buf.toString(undefined, 0, 8));

// const buf = Buffer.from([1,2,3,4,5]);
// const json = JSON.stringify(buf);
//
// const copy = JSON.parse(json, (key, value) => {
//     console.log('key', key);
//     console.log('value', value);
//     return value && value.type === 'Buffer'? Buffer.from(value.data) : value;
// });
// console.log('copy', copy);

// const buf1 = Buffer.from('cainiao ');
// const buf2 = Buffer.from('www.runoob.com');
// const buf3 = Buffer.concat([buf1, buf2], 10);
// console.log(buf3.toString());

// const buf1 = Buffer.from('abc');
// const buf2 = Buffer.from('abc');
// let result = buf1.compare(buf2);
// console.log(result);

// const buf1 = Buffer.from('abcdefghijkl');
// // const buf2 = Buffer.from('RUNOOB');
// // // buf2.copy(buf1); //buf2 插入到（复制到）buf1的指定位置（没有指定，默认为0）
// // // console.log(buf1.toString());
// // const buf3 = Buffer.from('123456');
// // buf2.copy(buf3, 2);
// // console.log(buf3.toString());

// const buf1 = Buffer.from('runoob');
// const buf2 = buf1.slice(0,2);
// console.log(buf2.toString());

// const buf = Buffer.from('www.runoob.com');
// console.log(buf.length);
// const original_buf = Buffer.from('www.baidu.com');
// const slice_buf = original_buf.slice(4,9);
// slice_buf.write('xxxxx');
// console.log(slice_buf.toString());
// console.log(original_buf.toString());


