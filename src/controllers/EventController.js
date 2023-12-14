const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const db = require("../models/index");
const EventRepo = require("../dbRepository/queryhelper/EventRepo");

const EventController = {
  async eventcreate(req, res) {
    const data = await EventRepo.eventcreatedata(req.body);
    console.log(data.action, "45");
    if (data.action == "create") {
      res.status(200).json({
        message: "created Successfully",
        data: data.data,
        success: true,
      });
    } else if (data.action == "400_resp") {
      res.status(400).json({
        message: "invalid or null field",

        success: false,
      });
    } else {
      res.status(404).json({ message: "No Data Found", success: false });
    }
  },

  async eventlist(req, res) {
    const data = await EventRepo.eventlistdata();
    console.log(data.action, "45");
    if (data.action == "list") {
      res.status(200).json({

        data: data.data,
        success: true,
      });
    } else if (data.action == "400_resp") {
      res.status(400).json({
        message: "invalid or null field",

        success: false,
      });
    } else {
      res.status(404).json({ message: "No Data Found", success: false });
    }
  },
  async updateevent(req, res) {
    const data = await EventRepo.updateeventdata();
    console.log(data.action, "45");
    if (data.action == "list") {
      res.status(200).json({

        data: data.data,
        success: true,
      });
    } else if (data.action == "400_resp") {
      res.status(400).json({
        message: "invalid or null field",

        success: false,
      });
    } else {
      res.status(404).json({ message: "No Data Found", success: false });
    }
  },

};

module.exports = EventController;
