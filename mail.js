const NodeMailer = require('nodemailer')
const {mailOption} = require('./config')

const sendMailer = (optionsTransporterMail = OptionsTransporterMail, optionsMail = OptionsMail, callback) => {
  let transporter = NodeMailer.createTransport(optionsTransporterMail);
  transporter.sendMail(optionsMail, function (err, info) {
    callback(err, info)
  });
}

const mail = (subject, content) => {
  sendMailer(mailOption, {
    from: mailOption.auth.user,
    to: mailOption.to,
    subject: subject,
    // text: "Hello worlds",
    html: content
  }, (err, info) => {
    if (err) console.log(err);
  })
}
module.exports = mail;
