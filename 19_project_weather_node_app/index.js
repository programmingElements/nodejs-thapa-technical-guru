const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperature;
}

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=27ce49572e372e42678c64fbc61cf06d")
        .on("data", (chunk) => {
            const objData = JSON.parse(chunk);
            // console.log(objData);
            // console.log(objData.main.temp);
            // console.log(objData.name);

            const realTimeData = replaceVal(homeFile, objData);
            console.log(realTimeData);
            response.write(realTimeData);
        })
        .on("end", (err) => {
            if (err) return console.log("connection closed due to errors", err);

            console.log("end");
            response.end();
        });
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log(`Server is running on port 8000`)
});