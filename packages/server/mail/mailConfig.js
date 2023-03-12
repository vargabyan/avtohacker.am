const nodemailer = require('nodemailer');

const { MAIL_PASSWORD, MAIL_USER, MAIL_HOST, MAIL_PORT } = process.env;

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: false,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
});

module.exports = transporter;
