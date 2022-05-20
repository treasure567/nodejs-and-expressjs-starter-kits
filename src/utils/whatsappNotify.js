require('dotenv').config();

const https = require('https');



const trenalyze = {
    token: process.env.TRENALYZE_TOKEN,
    sender: process.env.TRENALYZE_SENDER,
};

class whatsappNotify {
    static sendWaMessage(details) {
        const data = JSON.stringify({
            receiver: details.receiver,
            msgtext: details.message,
            sender: trenalyze.sender,
            token: trenalyze.token,
            appurl: trenalyze.appurl,
            mediaurl: details.mediaurl,
            buttons: details.buttons
        });

        const options = {
            hostname: 'api.trenalyze.com',
            port: 443,
            path: '/send',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }

        const req = https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)

            res.on('data', d => {
                process.stdout.write(d)
            })
        })

        req.on('error', error => {
            console.error(error)
        })

        req.write(data)
        req.end()

    }
}

module.exports = whatsappNotify;