const db = require('../server/db')
const {green, red} = require('chalk')

const Products = require('../server/db/models/product')
const Users = require('../server/db/models/user')

const productsForPostico = [
  {
    title: 'Thriller',
    songList: 'Toiahwewewf,wefw',
    artistName: 'Michael Jackson',
    releaseYear: 1982,
    imageUrl:
      'https://i5.walmartimages.com/asr/ac1953e5-4676-4ede-b0ff-0e3ad92818a3_1.915ca3bc461982df19a86d4acd26228a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
    price: 50,
    category: 'Pop',
    inventory: 148
  },
  {
    title: 'Ray of Light',
    songList: 'Erotic, ray of Light, Time goes By',
    artistName: 'Madonna',
    releaseYear: 1988,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/7128tY0BnEL._SY450_.jpg',
    price: 36,
    category: 'Pop',
    inventory: 77
  },
  {
    title: 'Rumours',
    songList: 'Dreams, Never going back',
    artistName: 'Fleetwood Mac',
    releaseYear: 1977,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71BekDJBb3L._SY355_.jpg',
    price: 88,
    category: 'Pop Rock',
    inventory: 28
  }
]

const usersForPostico = [
  {
    firstName: 'Peter',
    lastName: 'Boustani',
    fullName: 'Peter Boustani',
    userName: 'boustanip718',
    email: 'boustanip718@gmail.com',
    phoneNumber: 6584,
    password: 'kstlsihc',
    salt: 'okaodudnwod',
    googleId: 'boustanip718',
    imageUrl:
      'https://i.pinimg.com/originals/f1/01/40/f101408a505673ae915f3afcc6588183.png'
  },
  {
    firstName: 'Agne',
    lastName: 'Urbaityte',
    fullName: 'Agne Urbaityte',
    userName: 'agneur',
    email: 'agne.urbaityte@gmail.com',
    phoneNumber: 23344,
    password: 'vjbdfbn',
    salt: 'lkndflknfd',
    googleId: 'agne.urbaityte',
    imageUrl:
      'https://i.pinimg.com/originals/f1/01/40/f101408a505673ae915f3afcc6588183.png'
  },
  {
    firstName: 'Bobby',
    lastName: 'Scarnewman',
    fullName: 'Bobby Scarnewman',
    userName: 'iKilledMufasa',
    email: 'thepeopleschamp@gmail.com',
    phoneNumber: 33888,
    password: 'captainfalcon',
    salt: 'isthegoat',
    googleId: 'bobby.scar',
    imageUrl:
      'https://i.pinimg.com/originals/f1/01/40/f101408a505673ae915f3afcc6588183.png'
  }
]

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(
      productsForPostico.map(product => {
        return Products.create(product)
      })
    )

    await Promise.all(
      usersForPostico.map(user => {
        return Users.create(user)
      })
    )

    // try {
    //   await db.sync({force: true})
    //   return Products.bulkCreate(productsForPostico).then(() =>
    //     Users.bulkCreate(usersForPostico)
    //   )
  } catch (err) {
    console.log(red(err))
  }
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}

// 'use strict'

// const db = require('../server/db')
// const {User} = require('../server/db/models')

// async function seed() {
//   await db.sync({force: true})
//   console.log('db synced!')

//   const users = await Promise.all([
//     User.create({email: 'cody@email.com', password: '123'}),
//     User.create({email: 'murphy@email.com', password: '123'})
//   ])

//   console.log(`seeded ${users.length} users`)
//   console.log(`seeded successfully`)
// }

// // We've separated the `seed` function from the `runSeed` function.
// // This way we can isolate the error handling and exit trapping.
// // The `seed` function is concerned only with modifying the database.
// async function runSeed() {
//   console.log('seeding...')
//   try {
//     await seed()
//   } catch (err) {
//     console.error(err)
//     process.exitCode = 1
//   } finally {
//     console.log('closing db connection')
//     await db.close()
//     console.log('db connection closed')
//   }
// }

// // Execute the `seed` function, IF we ran this module directly (`node seed`).
// // `Async` functions always return a promise, so we can use `catch` to handle
// // any errors that might occur inside of `seed`.
// if (module === require.main) {
//   runSeed()
// }

// // we export the seed function for testing purposes (see `./seed.spec.js`)
// module.exports = seed
