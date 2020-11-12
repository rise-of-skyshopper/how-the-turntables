const Sequelize = require('sequelize')
const db = require('../db')

const CreditCard = db.define('creditCard', {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  creditCardNumber: {
    type: Sequelize.BIGINT,
    allowNull: false,
    validate: {
      isCreditCard: true
    }
  },
  expirationMonth: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 12
    }
  },
  expirationYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 2020,
      max: 9999
    }
  },
  cvv: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 999
    }
  }
})

module.exports = CreditCard
