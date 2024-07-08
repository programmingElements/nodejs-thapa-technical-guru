const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    const data = fs.readFileSync(`${__dirname}/UserApi.json`, 'utf-8');
    const objData = JSON.parse(data);
    if (request.url === "/") {
        response.end("Hello from the home sides");
    } else if (request.url === "/about") {
        response.end("Hello from the AboutUs sides");
    } else if (request.url === "/contact") {
        response.end("Hello from the ContactUs sides");
    } else if (request.url === "/userApi") {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(objData[1].username);
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end("<h1>404 error pages. Page doesn't exits<h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the Port no 8000");
})