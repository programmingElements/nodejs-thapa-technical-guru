// The http.createServer() method includes request and response parameters which is supplied by Node.js.

// The request object can be used to get information about the current HTTP request
// e.g., url, request header, and data.

// The response object can be used to send a response for a current HTTP request.

// If the response from the HTTP server is supposed to be displayed as HTML,
// you should includes an HTTP header with the correct content type:

const http = require("http");

const port = 8001;

const server = http.createServer(function(request, response) {
    response.end("Hello from the others sides");
});


server.listen(port, function(){
    console.log(`Server is running on ${port}`);
})