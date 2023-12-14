const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const db = require("../models/index");
const userchannelRepo = require("../dbRepository/queryhelper/userchannelrepo");

const User = db.user;

const userController = {
  async getuser(req, res) {
    const data = await userchannelRepo.getuserdata(req.body);
    console.log(data.action, "45");
    if (data.action == "update") {
      res.status(200).json({
        message: "created Successfully",
        data: data.data,
        success: true,
      });
    } else if (data.action == "emailexist") {
      res
        .status(200)
        // [{ data: data, success: true }]
        .json({
          data: {
            message: "this Email is already used",
            success: true,
            status: 400,
          },
        });
    } else if (data.action == "error-all") {
      res.status(422).json({ message: data.message, success: false });
    } else if (data.action == "error") {
      res.status(422).json({ message: "inValid email", success: false });
    } else if (data.action == "error-phn") {
      res.status(422).json({
        message: "Password must be at least 8 characters long.",
        success: false,
      });
    } else {
      res.status(404).json({ message: "No Data Found", success: false });
    }
  },

  async loginuser(req, res) {
    const data = await userchannelRepo.getlogindata(req.body);
    if (data.action == "status") {
      res.status(422).json({ message: "invalid User Email", success: false });
    } else if (data.action == "error-email") {
      res.status(422).json({ message: data.message, success: false });
    } else if (data.action == "passstatus") {
      res.status(422).json({ message: "invalid password", success: false });
    } else if (data.action == "created") {
      res
        .status(200)
        .json({ message: "login successfully", data: data , success: true });
    } else {
      res.status(404).json({ message: "No Data Found", success: false });
    }
  },

  async forgetpassuser(req, res) {
    const data = await userchannelRepo.forgetpass(req.body);
    if (data && data.action == "checkemail") {
      res.status(200).json({
        message: "check your otp on your mail",
        success: true,
        data: data,
      });
    } else if (data && data.action == "inv-email") {
      res.status(422).json({ message: "invaild Email", success: false });
    } else if (data.action == "error") {
      res
        .status(422)
        .json({ message: "eooor", success: false, data: data.data });
    }
  },

  async resetpassword(req, res) {
    console.log(req.body, "xyz");
    const data = await userchannelRepo.resetpass(req.body);
    if (data && data.action == "pass-success") {
      res
        .status(200)
        .json({ message: "password change", success: true, data: data });
    } else if (data && data.action == "in-pass") {
      res.status(422).json({ message: "invaild password", success: false });
    } else if (data.action == "in-otp") {
      res.status(422).json({ message: "invaild otp,", success: false });
    } else if (data.action == "in-email") {
      res.status(422).json({ message: "invaild Email,", success: false });
    } else if (data.action == "same-pass") {
      res
        .status(422)
        .json({ message: "same password is not valid", success: false });
    }
  },

  async userprofile(req, res) {
    try{
      console.log(req.body, "xyz");
      const data = await userchannelRepo.userprofiledata(req);
      console.log('Data:', data);
      if (data && data.action == "profile data") {
        res.status(200).json({ data: data, success: true });
      } else if (data.action == "error") {
        res.status(500).json({ message: "data not found", success: false });
      }
    }
    
      catch (error) {
        console.error("Error in userprofile function:", error);
        res.status(500).json({ message: "Internal server error", success: false });
      }
    

  },
  async updateprofile(req, res) {
    var profileimage = "";

    if (req.files) {
      console.log(req.files, "filed");
      for (let i = 0; i < req.files.length; i++) {
        if (req.files[i].fieldname == "profileimage") {
          profileimage = req.files[i].filename;
          let extArray = req.files[i].mimetype.split("/");
          // pantype = extArray[extArray.length - 1];
        }
      }
    }

    console.log(profileimage, "updateprofile");
    console.log(req.body, "updateprofile");
    const data = await userchannelRepo.updateprofiledata(
      req.body,
      profileimage
    );
    if (data && data.action == "profile data") {
      res.status(200).json([{ data: data, success: true,profileimage:profileimage }]);
    } else if (data.action == "error") {
      res.status(500).json({ message: "data not found", success: false });
    }
  },
  async changepassword(req, res) {
    console.log(req.body, "xyz");
    const data = await userchannelRepo.changePasswordData(req.body);
    if (data && data.action == "not match") {
      res.status(400).json({ message: 'New password and confirm password do not match'});
    } else if (data.action == "match") {
      return res.status(200).json({ message: 'Password changed successfully', success: true  });
    }
     else if (data.action == "old pass") {
      return res.status(400).json({ message: 'Old password is incorrect' });
    }
     else if (data.action == "error") {
      res.status(500).json({ message: "data not found", success: false });
    }
  },
};

module.exports = userController;
