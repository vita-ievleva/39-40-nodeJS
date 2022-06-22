
const sgMail = require('@sendgrid/mail');
const {SEND_GRID_API_KEY, PORT} = require('../helpers/env');

const BASE_URL = `http://localhost:${PORT}/api`


let nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");


const ses = new aws.SES({
    apiVersion: "2010-12-01",
    region: "eu-west-1",
    defaultProvider,
});

// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
    SES: { ses, aws },
});


const sendEmail = async (userEmail, code)  => {
    const link = `${BASE_URL}/auth/verify/${code}`
    // NODEMAILER
    // try {
    //     await transporter.sendMail(
    //         {
    //             to: userEmail,
    //             from: '*****@gmail.com', // can be stored in envs
    //             subject: 'Confirm your email',
    //             html: `<h4>Click on this link to confirm registration ${link}</h4>`,
    //         }
    //     );
    //
    // } catch (e) {
    //     console.log(e);
    //     throw e;
    // }


    // SENDGRID
    sgMail.setApiKey(SEND_GRID_API_KEY);

    const msg = {
        to: userEmail,
        from: '*****@gmail.com',
        subject: 'Confirm your email',
        html: `<h4>Click on this link to confirm registration ${link}</h4>`,
    }

    try {
        const result = await sgMail.send(msg);
        console.log('result', result);

    } catch (e) {
        console.log('ERROR', e);
        throw e;
    }

}

module.exports = {
    sendEmail
}
