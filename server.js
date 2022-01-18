const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Le serveur est le meilleur');
});

server.listen(process.env.PORT || 4000)