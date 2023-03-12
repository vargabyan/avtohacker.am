const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const nodemailer = require('nodemailer');
const transporter = require('../../mail/mailConfig');

const { UPLOAD_FOLDER, MAIL_FROM, MAIL_TO } = process.env;
const upload = multer({
  dest: UPLOAD_FOLDER,
  limits: {
    fileSize: 1000000,
  },
});

exports.postSendToMail = async (request, response) => {
  if (!request.body) return response.sendStatus(404);

  // console.log('====================================');
  // console.log(request.body);
  // console.log('====================================');

  const info = await transporter.sendMail({
    from: MAIL_FROM,
    to: MAIL_TO,
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>',
  });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  response.json('ok');
};

exports.postFileSandToMail = [
  upload.single('filedata'),
  async (request, response, next) => {
    if (!request.file) return response.sendStatus(404);
    const { file } = request;

    // console.log('====================================');
    // console.log(file);
    // console.log('====================================');

    response.json('ok');
  },
];

mongoose.disconnect();
