const http = require('http');
const run = require('./run');

const server = http.createServer((req, res) => {
    console.log(req);
    run();
})

server.listen(8000, () => {
    console.log("Server Running");
})