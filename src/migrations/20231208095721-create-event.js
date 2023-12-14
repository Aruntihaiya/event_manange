'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventTitle: {
        type: Sequelize.STRING
      },
      Organizer: {
        type: Sequelize.STRING
      },
      type:{
        type: Sequelize.STRING
      },
       Catergory:{
        type: Sequelize.STRING
      },
       SuBCatergory:{
        type: Sequelize.STRING
      },
      Venue:{
        type: Sequelize.STRING
      },
      organizer_id:{
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.STRING
 },
      start_date:{
        type: Sequelize.STRING
 },
     end_date:{
        type: Sequelize.STRING
 },
     start_time:{
        type: Sequelize.STRING
 },
     end_time:{
        type: Sequelize.STRING
 },
     no_of_ticket:{
        type: Sequelize.STRING
 },
     event_image:{
        type: Sequelize.STRING
 },


      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  }
};