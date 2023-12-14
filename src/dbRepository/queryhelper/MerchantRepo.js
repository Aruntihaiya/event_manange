const db = require("./../../models/index");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const nodemailer = require("nodemailer");
import validator from "validator";
import crypto from "crypto";
import Nodemailer from "./../../utilities/Nodemailer";
const Channel = db.channel;
const merchantuser = db.merchantuser;

const MerchantRepo = {
  async merchntregisterdata(bodyData,res) {
   
  console.log(bodyData.firstname,'552146dds')
  console.log(bodyData.lastname,'552146dds')
  console.log(bodyData.email,'552146dds')
  console.log(bodyData.password,'552146dds')
  console.log(bodyData.mobile,'552146dds')
    try {
      const hashPass = await bcrypt.hash(bodyData.password, 12);
      const existingEmailUser = await merchantuser.findOne({
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
        const updateData = await merchantuser.create({
          firstname: bodyData.firstname,
          lastname:bodyData.lastname,
          email: bodyData.email,
          mobile:bodyData.mobile,
          password:hashPass,
        });
        console.log(updateData.dataValues,'bhujjkkkk');
        // console.log(bodyData.firstname,'bhujjkkkk');
        return {
          action: "update",
          data: updateData,
        };
      }
    } catch (error) {
      console.log(error,'errore')
      return error;
     
    }
  },

  async merchntloginuserdata(bodyData) {
    try {
      if (!validator.isEmail(bodyData.email)) {
        return {
          action: "error-email",
          message: "Invalid email address.",
        };
      }

      const existingUser = await merchantuser.findOne({
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

        const theToken = JWT.sign(
          { userss: existingUser },
          process.env.SECRET
          ,
          {
            expiresIn: "1 day",
          }
        );

        return { token: theToken, action: "created" };
      }
    } catch (err) {
      console.log(err);
    }
  },

  async merchntforgetpassdata(bodydata) {
    try {
      const usera = await merchantuser.findOne({ where: { email: bodydata.email } });
      console.log(usera, "usera");
      if (!usera) {
        return { action: "inv-email" };
      } else {
        const otp = crypto.randomInt(1000000).toString().padStart(6, "0");
        await merchantuser.update(
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

  async merchntresetpassworddata(bodydata) {
  
    try {
      console.log(bodydata.password,'sdsdds');
      if (bodydata.password == "") {
        return { action: "in-pass" };
      }

      const existingUser = await merchantuser.findOne({
        where: { email: bodydata.email, otp: bodydata.otp },
      });


      console.log(existingUser,'existingUser')
      if (!existingUser) {
        return { action: "in-otp" };
      }

      if (existingUser.password === undefined) {
       Cconsole.log("sddsfsddsundefine")
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
          password: hashPass,
          otp: null, // You might want to clear the OTP field after a successful password reset.
        });

        return { action: "pass-success" };
      }
    } catch (error) {
      console.error(error);
      return { action: "error", data: error.message };
    }
  },

    async userprofiledata(bodydata){
           try{
           const userdata = await merchantuser.findAll(({ where: { id: bodydata.id } }))
           return { action: "profile data", data: userdata};
           }
           catch(err){
            return { action: "error", error: err};           }
 
    },
    async updateprofiledata(bodydata,profileimage){

           try{
            console.log(profileimage,'profileimage12')
            const updatedRows = await merchantuser.update(
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
           return { action: "profile data", data: updatedRows};
           }
           catch(err){
            return { action: "error", error: err};}
 
    },
    async changepassworddata(bodydata){

           try{
            if (Newpassword !== Confirmpassword) {
              return { action: "not match" };
            }

            const isPasswordValid = await bcrypt.compare(Oldpassword, bodydata.password);

            if (!isPasswordValid) {
           
              return { action: "old pass" }
            }
        
            // Hash the new password
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(Newpassword, saltRounds);
        
            // Update the user's password
            bodydata.password = hashedPassword;
            await bodydata.save();
        

            return { action: "match" }
           }
           catch(err){
            return { action: "error", error: err};}
 
    }


    
 

};

module.exports = MerchantRepo;
