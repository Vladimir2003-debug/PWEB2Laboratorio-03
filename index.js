const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url);
    response.end("<h1>Hola mundo</h1>");
});
server.listen(3000);
console.log("Escuchando en: http://localhost:3000")