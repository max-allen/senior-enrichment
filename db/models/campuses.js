'use strict';

const db = require('../index')
const dataTypes = db.Sequelize;

const Campus = db.define('campus', {
  name: {
    type: dataTypes.STRING,
    allowNull: false
  },

  address: {
    type: dataTypes.STRING,
    allowNull: false

  },

  phone:{
    type: dataTypes.INTEGER,
    allowNull: false
  },

  mascot:{
    type: dataTypes.STRING,
  },

  principal: {
    type: dataTypes.STRING,
    allowNull: false
  },

  enrollment:{
    type: dataTypes.INTEGER,
    allowNull: false
  },

  colors:{
    type: dataTypes.STRING
  },

  grades:{
    type: dataTypes.INTEGER,
    allowNull: false
  }

})

module.exports = Campus