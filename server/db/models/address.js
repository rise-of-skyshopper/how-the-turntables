const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('Address', {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
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
    type: Sequelize.ENUM('Shipping', 'Billing')
  }
})

module.exports = Address
