const http = require ('http');

const server = http.createServer((req, res) => {
    res.write("Its Alex");
    res.end();
});

server.listen(4000);