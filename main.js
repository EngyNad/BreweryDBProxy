var http = require("http");
var rp = require('request-promise');

http.createServer(function (request, response) {

    var url = request.url;

    if (url.indexOf('key') !== -1) {

        response.writeHead(200, {'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'});

        rp('http://api.brewerydb.com' + url)
                .then(function (chunk) {
                    response.end(chunk);
                })
                .catch(function (err) {
                    // Crawling failed... 
                });

    }
}).listen(8085);

console.log('Server running at http://localhost:8085/');


