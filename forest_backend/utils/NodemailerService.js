import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: "mail.forestsportsandrecreation.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};
