const http = require('http');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/': {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello World\n');
            break;
        }

        case '/user': {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('User\n');
            break;
        }

        case '/favicon.ico': {
            const fs = require('fs');
            fs.readFile('favicon.ico', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error loading favicon.ico\n');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'image/x-icon' });
                res.end(data);
            });
            break;
        }

        default: {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 not found\n');
            break;
        }
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});