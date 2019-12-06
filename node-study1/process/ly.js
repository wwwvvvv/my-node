var http = require('http');
var url = require('url');


function start() {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log('Request for' + pathname + ' received.');
        response.writeHead(200, {"Content-type": 'text/plain'});
        response.write('hello Test');
        response.end();
    }
    http.createServer(onRequest).listen(8085);
}

start();