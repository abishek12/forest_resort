import nodemailer from 'nodemailer';

export const sendActivationEmail = async (email, activationUrl) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Account Activation',
    text: `Thank you for registering! Please click on the following link to activate your account:\n\n
           ${activationUrl}\n\n
           If you did not request this, please ignore this email.\n`,
  };

  await transporter.sendMail(mailOptions);
};