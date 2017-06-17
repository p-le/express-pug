const nodemailer = require('nodemailer');
const config = require('../config.json');

class Mailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'gmail',
    });
  }
  
  send(options) {
    let mailOptions = {
      from: options.email,
      to: config.gmail.username,
      subject: options.subject,
      text: options.text
    }

    this.transporter.sendMail(mailOptions, (err, info) => {
      if (error) {
        console.log(err);
      } else {
        console.log('Message %s sent: %s', info.messageId, info.response);
      }
    })
  }
}

module.exports = Mailer;