const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('Address', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  middleName: {
    type: Sequelize.STRING
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipCode: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  addressType: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Shipping'
  }
})

module.exports = Address
