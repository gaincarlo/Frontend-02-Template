const http = require('http');

const server = http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
    }).on('end', () => {
        // body = Buffer.concat(body).toString();
        // BEGINNING OF NEW STUFF
        console.log('body', body)
        response.writeHead(200, { 'Content-Type': 'text/html' })

        response.end(`<html>
    <head>
    <title id="aaa">hello world</title>
</head>
</html>`);
    });
})

server.listen(8080)
console.log('server started')