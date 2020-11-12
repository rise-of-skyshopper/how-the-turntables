const router = require('express').Router()
const Sequelize = require('sequelize')
const {Order, Product} = require('../db/models')
const Op = Sequelize.Op

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: {
        model: Product
      }
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ['id', 'email']
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        id: {[Op.eq]: req.params.orderId}
      },
      include: {
        model: Product
      }
    })
    res.json(order)
  } catch (error) {
    next(error)
  }
})

module.exports = router
