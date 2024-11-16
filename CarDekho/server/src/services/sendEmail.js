const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendEmail = async (to, subject, text, html) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER, // sender address
            to, // list of receivers
            subject, // Subject line
            text, // plain text body
            html, // html body
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Email could not be sent');
    }
};