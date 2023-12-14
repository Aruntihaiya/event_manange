'use strict';
module.exports = (sequelize, DataTypes) => {
  const merchantuser = sequelize.define('merchantuser', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    password: DataTypes.STRING,
    otp:DataTypes.STRING,
    profileimage:DataTypes.STRING
  }, {});
  merchantuser.associate = function(models) {
    // associations can be defined here
  };
  return merchantuser;
};