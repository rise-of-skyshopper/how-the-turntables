const db = require('../server/db')
const {green, red} = require('chalk')

const Products = require('../server/db/models/product')
const Users = require('../server/db/models/user')
const Orders = require('../server/db/models/order')
const CreditCards = require('../server/db/models/creditCard')
const Addresses = require('../server/db/models/address')

const productsForPostico = [
  {
    title: 'Thriller',
    songList: 'P.Y.T, Thriller, Beat It',
    artistName: 'Michael Jackson',
    releaseYear: 1982,
    imageUrl:
      'https://i5.walmartimages.com/asr/ac1953e5-4676-4ede-b0ff-0e3ad92818a3_1.915ca3bc461982df19a86d4acd26228a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
    price: 5000,
    category: 'Pop',
    inventory: 148
  },
  {
    title: 'Ray of Light',
    songList: 'Erotic, Ray of Light, Time Goes By',
    artistName: 'Madonna',
    releaseYear: 1988,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/7128tY0BnEL._SY450_.jpg',
    price: 3600,
    category: 'Pop',
    inventory: 77
  },
  {
    title: 'Rumours',
    songList: 'Dreams, Never Going Back Again, The Chain',
    artistName: 'Fleetwood Mac',
    releaseYear: 1977,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71BekDJBb3L._SY355_.jpg',
    price: 8800,
    category: 'Pop Rock',
    inventory: 28
  },
  {
    title: 'Back in Black',
    songList: 'Hells Bells, Shoot To Thrill, Back in Black',
    artistName: 'ACDC',
    releaseYear: 1980,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/ACDC_Back_in_Black.png/1200px-ACDC_Back_in_Black.png',
    price: 10000,
    category: 'Rock and Roll',
    inventory: 4
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
    password: 'ACDCLover98',
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
    password: 'password',
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
    email: 'thepeopleschamp@yahoo.com',
    phoneNumber: 33888,
    password: 'captainfalcon',
    salt: 'isthegoat',
    googleId: 'bobby.scar',
    imageUrl:
      'https://i.pinimg.com/originals/f1/01/40/f101408a505673ae915f3afcc6588183.png'
  },
  {
    firstName: 'Joseph',
    lastName: 'Marquez',
    fullName: 'Joseph Marquez',
    userName: 'C9 Mango',
    email: 'scorpionmaster29@hotmail.com',
    phoneNumber: 33888,
    password: 'falcobeatsfox',
    salt: 'myNameIsJoshua', // is this provided for us????
    googleId: 'Mango',
    imageUrl:
      'https://i.pinimg.com/originals/f1/01/40/f101408a505673ae915f3afcc6588183.png'
  }
]

const ordersForPostico = [
  {
    status: 'Current Cart',
    userId: 1
  },
  {
    status: 'Current Cart',
    userId: 2
  },
  {
    status: 'Old Order',
    deliveryStatus: 'Pending',
    userId: 1
  },
  {
    status: 'Old Order',
    deliveryStatus: 'Delivered',
    userId: 3
  },
  {
    status: 'Old Order',
    deliveryStatus: 'Delivered',
    userId: 3
  },
  {
    status: 'Current Cart',
    userId: 4
  }
]

const addressesForPostico = [
  {
    fullName: 'Sandra Bullock',
    street: '1160 1st Ave 2S',
    city: 'New York',
    state: 'New York',
    country: 'USA',
    zipCode: 10065,
    addressType: 'Shipping',
    userId: 1
  },
  {
    fullName: 'Alexey Kotolevskiy',
    street: '244 W 14th St',
    city: 'New York',
    state: 'New York',
    country: 'USA',
    zipCode: 10010,
    addressType: 'Billing',
    userId: 2
  },
  {
    fullName: 'Ramune Balzakaite',
    street: '14 Zeedijk St',
    city: 'Amsterdam',
    state: 'Netherlands',
    country: 'Netherlands',
    zipCode: 1012,
    addressType: 'Shipping',
    userId: 3
  },
  {
    fullName: 'Vilte Urbonaviciute',
    street: '25 Berzu St',
    city: 'Kaunas',
    state: 'Lithuania',
    country: 'Lithuania',
    zipCode: 54667,
    addressType: 'Billing',
    userId: 4
  },
  {
    fullName: 'Giedre Vingyte',
    street: 'Viale Piave 1',
    city: 'Milan',
    state: 'Italy',
    country: 'Italy',
    zipCode: 20129,
    addressType: 'Shipping',
    userId: 3
  },
  {
    fullName: 'Agne Urbaityte',
    street: '768 5th Ave',
    city: 'New York',
    state: 'New York',
    country: 'USA',
    zipCode: 10019,
    addressType: 'Billing',
    userId: 3
  }
]

const creditCardsForPostico = [
  {
    fullName: 'Peter Boustani',
    creditCardNumber: 2222405343248877,
    expirationMonth: 11,
    expirationYear: 2025,
    cvv: 347,
    userId: 1
  },
  {
    fullName: 'Alexey Kotolevskiy',
    creditCardNumber: 5111010030175156,
    expirationMonth: 3,
    expirationYear: 2028,
    cvv: 574,
    userId: 2
  },
  {
    fullName: 'Agne Urbaityte',
    creditCardNumber: 6011111111111117,
    expirationMonth: 5,
    expirationYear: 2023,
    cvv: 223,
    userId: 3
  },
  {
    fullName: 'Vilte Urbonaviciute',
    creditCardNumber: 4111111111111111,
    expirationMonth: 10,
    expirationYear: 2021,
    cvv: 654,
    userId: 4
  },
  {
    fullName: 'Vyte Murinaite',
    creditCardNumber: 378282246310005,
    expirationMonth: 12,
    expirationYear: 2022,
    cvv: 230,
    userId: 1
  }
]

const seed = async () => {
  try {
    await db.sync({force: true})

    const productArr = await Promise.all(
      productsForPostico.map(product => {
        return Products.create(product)
      })
    )

    await Promise.all(
      usersForPostico.map(user => {
        return Users.create(user)
      })
    )

    const orderArr = await Promise.all(
      ordersForPostico.map(order => {
        return Orders.create(order)
      })
    )

    await Promise.all(
      creditCardsForPostico.map(creditCard => {
        return CreditCards.create(creditCard)
      })
    )

    await Promise.all(
      addressesForPostico.map(address => {
        return Addresses.create(address)
      })
    )

    await orderArr[4].addProduct(productArr[0])
    await orderArr[1].addProduct(productArr[2])

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
