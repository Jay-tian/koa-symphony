const nodemailer = require('nodemailer');
global.symphony.parameters
let transporter = nodemailer.createTransport(global.symphony.parameters.email);
global.symphony.sendEmail = function(options, call) {
  transporter.sendMail(options, (error, info) => {
    if (error) {
      return console.log(error);
    }

    if (call) {
      call(info);
    }
  });
}