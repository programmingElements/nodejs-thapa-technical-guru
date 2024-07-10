const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
    
    /* 1st way */

    // fs.readFile("input.txt", (err, data) => {
    //     if (err) return console.log(err);
    //     response.end(data.toString());
    // })

    /* 2nd way */

    // const rstream = fs.createReadStream('inputs.txt');

    // rstream.on("data", (chunkdata) => {
    //     response.write(chunkdata);
    // })

    // rstream.on("end", () => {
    //     response.end();
    // })

    // rstream.on("error", (err) => {
    //     console.log(err);
    //     response.end("file not found!");
    // })


    /* 3rd way */

    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(response);

});

server.listen(8000, "127.0.0.1")