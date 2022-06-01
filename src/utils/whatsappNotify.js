require('dotenv').config();
const https = require('https');

const trenalyze = {
    token: process.env.TRENALYZE_TOKEN,
    sender: process.env.TRENALYZE_SENDER,
    appurl: 'https://trenalyze.com'
};

class whatsappNotify {
    static setconfig(token, sender) {
        return {
            token: token,
            sender: sender,
            appurl: 'https://trenalyze.com'
        }
    }
    static sendWhatsappNotification(details, result) {
        const data = JSON.stringify({
            receiver: details.receiver,
            msgtext: details.message,
            sender: this.setconfig().sender,
            token: this.setconfig().token,
            appurl: this.setconfig().appurl,
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
            console.log(`statusCode: ${res.statusCode}`);

            // console.log('headers:', res.headers);
            res.on('data', d => {

                process.stdout.write(d);
                result(null, res);
                return;

            })
        })

        req.on('error', error => {
            console.error(error);
            const info = {

            }
            result(null, error);
            return;
        })

        req.write(data);
        req.end();

    }
}

module.exports = whatsappNotify;