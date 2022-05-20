require('dotenv').config();

const https = require('https');



const trenalyze = {
    token: process.env.TRENALYZE_TOKEN,
    sender: process.env.TRENALYZE_SENDER,
    appurl: 'https://trenalyze.com'
};

class whatsappNotify {
    static sendWhatsappNotification(details, result) {
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
            result(null, res);

            //return;
            res.on('data', d => {

                const info = process.stdout.write(d)

                console.log(info);
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