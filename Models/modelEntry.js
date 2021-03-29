const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize("customerManagementDB", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const User = db.define("User", {
    userId : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNo: DataTypes.STRING,
  addressOne: DataTypes.STRING,
  addressTwo: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  isActive: { type: DataTypes.BOOLEAN,defaultValue:0 },
});


module.exports = { db ,User};
