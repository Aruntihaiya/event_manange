
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
       queryInterface.addColumn('users','profileimage', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
      
      
       
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
 
  }
};
