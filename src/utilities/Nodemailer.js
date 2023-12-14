const db = require("./../models/index");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const nodemailer = require("nodemailer");


const Channel = db.channel;
const user = db.user;
const Nodemailer = {
 async emailwithmailer(bodyData, res, myotp) {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
             user: "madebysale.impetrosys@gmail.com",
             pass: "afwp rkem txmr tvnr",
            },
    });
    console.log("transporter", myotp, bodyData.email);
    transporter.verify((err, success) => {
      if (err) {
        console.error("Error verifying email transporter:", err);
      } else {
        console.log("Email transporter is verified and ready to use", success);
      }
    });

    let mailOptions = {
      from: "madebysale.impetrosys@gmail.com",
      to: bodyData.email,
      subject: "Registration Confirmation",
      text: "Congratulations for registering in Event management website " + bodyData.email +myotp,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return {
          message:"Email could not be sent"
        }
      
      } else {
        console.log("Email sent:"+info.response);
        return {
          message:"Email sent successfully"
        }
     
      }
    });
  },

}
module.exports = Nodemailer;
