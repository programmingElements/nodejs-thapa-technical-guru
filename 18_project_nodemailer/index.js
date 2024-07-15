const express = require("express");
const dotenv = require("dotenv");
const sendEmail = require("./controller/mail.controller.js");

dotenv.config({
    path: "./.env"
});

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
    response.send("I am a server");
});

app.get("/sendEmail", sendEmail);

app.listen(PORT, () => {
    console.log(`I am live in port no. ${PORT}`)
});

