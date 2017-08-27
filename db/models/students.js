'use strict';

const db = require('../index')
const dataTypes = db.Sequelize;

const Student = db.define('student', {
  name: {
    type: dataTypes.STRING,
    allowNull: false
  },

  age: {
    type: dataTypes.INTEGER,
    allowNull: false

  },

  gender:{
    type: dataTypes.ENUM('Male','Female')
  },

  phone:{
    type: dataTypes.STRING,
  },

  email: {
    type: dataTypes.STRING
  },

  address: {
    type: dataTypes.STRING
  },

  campus:{
    type: dataTypes.STRING,
    allowNull: false
  },

  grade:{
    type: dataTypes.INTEGER,
    allowNull: false
  }

})

module.exports = Student