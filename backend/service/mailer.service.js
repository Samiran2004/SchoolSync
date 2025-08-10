import nodemailer from 'nodemailer';
import envConfigs from '../configs/env.config.js';
const sendMail = async (data, callback) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: envConfigs.MAIL_ADDRESS,
            pass: envConfigs.MAIL_APP_PASSWORD
        }
    });

    const mailOptions = {
        from: envConfigs.MAIL_ADDRESS,
        to: data.to,
        subject: data.subject,
        html: data.html
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, info.response);
        }
    });
}

export default sendMail;