var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  pool: true,
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'XXXXXXXXX@gmail.com',
    pass: 'XXXXXXX'
  }
});

var mailOptions = {
  from: 'XXXXXXX@gmail.com',
  to: 'abc1@gmail.com, abc1@gmail.com',
  subject: 'Hey Mail is working',
//   text: 'Welcome to Trusted Circle App.'
  html: '<h1>Welcome</h1></p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 