const router = require('express').Router()
const Sequelize = require('sequelize')
const {User} = require('../db/models')
const Op = Sequelize.Op

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findAll({
      where: {
        id: {[Op.eq]: req.params.userId}
      }
    })
    res.json(user)
  } catch (error) {
    next(error)
  }
})

module.exports = router
