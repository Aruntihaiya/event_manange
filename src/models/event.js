'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {

    eventTitle: DataTypes.STRING,
    Organizer: DataTypes.STRING,
    type: DataTypes.STRING,
    Catergory: DataTypes.STRING,
    subcatergory: DataTypes.STRING,
    Venue: DataTypes.STRING,
    organizer_id: DataTypes.STRING,
    Venue: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    start_time: DataTypes.STRING,
    end_time: DataTypes.STRING,
    no_of_ticket: DataTypes.STRING,
    event_image: DataTypes.STRING,
  }, {});
  event.associate = function(models) {
    // associations can be defined here
  };
  return event;
};