const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    empNo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    empName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    empAddressLine1: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    empAddressLine2: {
      type: DataTypes.STRING(100),
    },
    empAddressLine3: {
      type: DataTypes.STRING(100),
    },
    empDateOfJoin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    empStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    empImage: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
  });
  return Employee;
};
