const nodemailer = require("nodemailer");

const sendMail = async (request, response) => {

    const testAccount = await nodemailer.createTestAccount();
    
    // connect with the smtp
    const transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'julianne7@ethereal.email',
            pass: 'C3ZSnMe5wdVDvRjTaM'
        }
    });

    const info = await transporter.sendMail({
        from: "Fred Chakri👨‍💻 <chakri.91@gmail.com>", // senders address
        to: "hitesh.choudhary@gmail.com", // receivers address (or) list of receivers
        subject: "About Flutter Course", // subject line
        text: "Hi Hitesh, I am Chakri Please Make series on Flutter Framework Guide 10k dollars.", // plain text body
        html: "<h2>Hi Hitesh Choudhary, Is This Chakravarthi Please Do the Series on Flutter Framework of 10k dollars.</h2>" // html body
    });

    console.log("Message Sent : %s", info.messageId);

    // response.send("I have sent email");

    response.json(info);
} 

module.exports = sendMail;