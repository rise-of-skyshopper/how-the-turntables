const {NOW} = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('Current Cart', 'Old Order')
  },
  timestamp: {
    type: Sequelize.DATE,
    defaultValue: NOW
  },
  deliveryStatus: {
    type: Sequelize.ENUM('Pending', 'Shipped', 'Delivered')
  },
  overallPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Order
