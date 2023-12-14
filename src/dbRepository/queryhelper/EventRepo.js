const db = require("./../../models/index");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const Channel = db.channel;
const event = db.event;



const EventRepo ={

    async eventcreatedata(bodyData, res) {
   try {
const createevent = await event.create({
    eventTitle: bodyData.eventTitle,
    Organizer: bodyData.Organizer,
    type: bodyData.type,
    Catergory: bodyData.Catergory,
    suBCatergory: bodyData.suBCatergory,
    organizer_id: bodyData.organizer_id,
    Venue:bodyData.Venue,
    status:bodyData.status,
    start_date: bodyData.start_date,
    end_date: bodyData.end_date,
    start_time: bodyData.start_time,
    end_time: bodyData.end_time,
    no_of_ticket: bodyData.no_of_ticket,
    event_image: bodyData.event_image,
        })
        return {
            action: "create",
            data: createevent,
          };
          
          }
         catch (error) {
          console.log(error, "errore");
          return error;
        }
      },

      async eventlistdata(bodyData, res) {
        try {
          const eventList = await event.findAll({});
          return {
            action: "list",
            data: eventList,
          };
        } catch (error) {
          console.error("Error fetching event list:", error);
          return {
            action: "error",
            error: "Failed to fetch event list",
          };
        }
      },
      async updateeventdata(bodyData, res) {
        try {
          const eventList = await event.findAll({});
          return {
            action: "list",
            data: eventList,
          };
        } catch (error) {
          console.error("Error fetching event list:", error);
          return {
            action: "error",
            error: "Failed to fetch event list",
          };
        }
      }


}


module.exports = EventRepo;