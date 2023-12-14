const db = require("./../../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
import validator from "validator";
import crypto from "crypto";
import Nodemailer from "./../../utilities/Nodemailer";
const Channel = db.channel;
const user = db.user;

const userchannelRepo = {
  async getuserdata(bodyData, res) {
 
    try {
      const hashPass = await bcrypt.hash(bodyData.password, 12);
      const existingEmailUser = await user.findOne({
        where: {
          email: bodyData.email,
        },
      });

      if (
        !bodyData ||
        !bodyData.firstname ||
        !bodyData.lastname ||
        !bodyData.email ||
        !bodyData.mobile ||
        !bodyData.password
      ) {
        return {
          action: "error-all",
          message:
            "Invalid input data. Please provide a valid Name, email, and password.",
        };
      }

      if (!validator.isEmail(bodyData.email)) {
        return {
          action: "error",
          message: "Invalid email address.",
        };
      }

      if (bodyData.password.length < 8) {
        return {
          action: "error-phn",
          message: "Password must be at least 8 characters long.",
        };
      }

      if (existingEmailUser) {
        return {
          action: "emailexist",
          data: existingEmailUser,
        };
      } else {
        const updateData = await user.create({
          firstname: bodyData.firstname,
          lastname: bodyData.lastname,
          email: bodyData.email,
          mobile: bodyData.mobile,
          password: hashPass,
        });
        console.log(updateData.dataValues, "bhujjkkkk");
        // console.log(bodyData.firstname,'bhujjkkkk');
        return {
          action: "update",
          data: updateData,
        };
      }
    } catch (error) {
      console.log(error, "errore");
      return error;
    }
  },

  async getlogindata(bodyData) {
    try {
      if (!validator.isEmail(bodyData.email)) {
        return {
          action: "error-email",
          message: "Invalid email address.",
        };
      }

      const existingUser = await user.findOne({
        where: {
          email: bodyData.email,
        },
      });

      if (!existingUser) {
        return {
          action: "status",
        };
      } else {
        const passMatch = await bcrypt.compare(
          bodyData.password,
          existingUser.password
        );
        if (!passMatch) {
          return { action: "passstatus" };
        }

        const theToken = jwt.sign(
          { userss: existingUser },
          "the-super-strong-secrect",
          {
            expiresIn: "1 day",
          }
        );

        return { token: theToken,id:existingUser.id, action: "created" };
      }
    } catch (err) {
      console.log(err);
    }
  },

  async forgetpass(bodydata) {
    try {
      const usera = await user.findOne({ where: { email: bodydata.email } });
      console.log(usera, "usera");
      if (!usera) {
        return { action: "inv-email" };
      } else {
        const otp = crypto.randomInt(1000000).toString().padStart(6, "0");
        await user.update(
          { otp: otp },
          { where: { id: usera.id }, returning: true }
        );

        const emailResult = await Nodemailer.emailwithmailer(
          bodydata,
          null,
          otp
        );
        console.log(otp, usera.id, "dds");

        return { action: "checkemail", data: emailResult };
      }
    } catch (err) {
      return { action: "error", data: err };
    }
  },

  async resetpass(bodydata) {
    try {
      console.log(bodydata.password, "sdsdds");
      if (bodydata.password == "") {
        return { action: "in-pass" };
      }

      const existingUser = await user.findOne({
        where: { email: bodydata.email, otp: bodydata.otp },
      });

      console.log(existingUser, "existingUser");
      if (!existingUser) {
        return { action: "in-otp" };
      }
      if (!existingUser) {
        return { action: "in-otp" };
      }

      if (existingUser.password === undefined) {
        Cconsole.log("sddsfsddsundefine");
      }

      const match = await bcrypt.compare(
        bodydata.password,
        existingUser.password
      );

      if (match) {
        return { action: "same-pass" };
      } else {
        const saltRounds = 10;
        const hashPass = await bcrypt.hash(bodydata.password, saltRounds);

        await existingUser.update({
          password: hashPass ,
          otp: null, 
        });

        return { action: "pass-success" };
      }
    } catch (error) {
      console.error(error);
      return { action: "error", data: error.message };
    }
  },

  async userprofiledata(req) {
    try{
   
      const userId = req.user.id;
      const userdata = await user.findAll({ where: { id: userId} });
      return { action: "profile data", data: userdata };
    } catch (err) {
      return { action: "error", error: err };
    }
  },
  async updateprofiledata(bodydata, profileimage) {
    try {
      console.log(profileimage, "profileimage12");
      const updatedRows = await user.update(
        {
          firstname: bodydata.firstname,
          lastname: bodydata.lastname,
          mobile: bodydata.mobile,
          profileimage: profileimage,
        },
        {
          where: { id: bodydata.id },
        }
      );
      return { action: "profile data", data: updatedRows };
    } catch (err) {
      return { action: "error", error: err };
    }
  },
  async changePasswordData(bodydata) {
 
      // Destructuring assignment for better readability
      const { id, Oldpassword, Newpassword, Confirmpassword } = bodydata;
  
      // Check if the new password matches the confirmation
      if (Newpassword !== Confirmpassword) {
        return { action: "not match" };
      }
  
      // Retrieve user data from the database (assuming 'User' is the model)
      const userid = await user.findByPk(id);

    if (!userid) {
      // return { action: "user  found" };
      console.log('sddssdds')
    }
  
      // Check if the old password is valid
      const isPasswordValid = await bcrypt.compare(Oldpassword, userid.password);
  
      if (!isPasswordValid) {
        return { action: "old pass" };
      }
  
      // Hash the new password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(Newpassword, saltRounds);
  
      // Update the user's password
      user.password = hashedPassword;
      await userid.save();
  
      return { action: "match" };
    
  }
  
  // // Example usage:
  // const bodydata = { id: "your_user_id_here", Oldpassword: "old_password", Newpassword: "new_password", Confirmpassword: "new_password" };
  // const result = await changePasswordData(bodydata);
  // console.log(result);
  
};

module.exports = userchannelRepo;
