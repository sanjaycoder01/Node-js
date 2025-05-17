const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url === '/getdata') {
        res.end('data');
        return; 
    }
    res.end('Hello world');
});

server.listen(3010, () => {
    console.log('Server running at http://localhost:3010');
});
