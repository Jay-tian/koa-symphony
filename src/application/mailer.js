const nodemailer = require('nodemailer');
global.symphony.parameters
let transporter = nodemailer.createTransport(global.symphony.parameters.email);
global.symphony.email = function(options, call) {
  transporter.sendMail(options, (error, info) => {
    if (error) {
      return console.log(error);
    }

    if (call) {
      call(info);
    }
  });
}
// let mailOptions = {
//   from: '"JavaScript之禅" <806338233@qq.com>', // sender address
//   to: 'tianshengjie@howzhi.com', // list of receivers
//   subject: 'Hello', // Subject line
//   // text: 'Hello world?', // plain text body
//   html: '<b>Hello world?</b>' // html body
// };

