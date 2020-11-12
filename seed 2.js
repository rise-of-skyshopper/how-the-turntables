const {db} = require('./server/db')
const {green, red} = require('chalk')

const Products = require('./server/db/index').Product
const Users = require('./server/db/index').User

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
    phoneNumber: 6584611568,
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
    phoneNumber: 1112223344,
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
    phoneNumber: 3336668888,
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
    return Products.bulkCreate(productsForPostico).then(() =>
      Users.bulkCreate(usersForPostico)
    )
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

// billingAddress: {
//   firstName: 'Peter',
//   lastName: 'Boustani',
//   middleName: null,
//   street: '123 Rockefeller',
//   city: 'New York',
//   state: 'New York',
//   country: 'USA',
//   zipCode: 12345,
// },
// creditCard: {
//   firstName: 'Peter',
//   lastName: 'Boustani',
//   middleName: null,
//   creditCardNumber: 123456789,
//   expirationMonth: 02,
//   expirationYear: 2028,
//   cvv: 789,
// },
// shippingAddress: {
//   firstName: 'Peter',
//   lastName: 'Boustani',
//   middleName: null,
//   street: '123 Rockefeller',
//   city: 'New York',
//   state: 'New York',
//   country: 'USA',
//   zipCode: 12345,
// },

// billingAddress: {
//   firstName: 'Agne',
//   lastName: 'Urbaityte',
//   middleName: 'Georgia',
//   street: '122-86',
//   city: 'Brooklyn',
//   state: 'New York',
//   country: 'USA',
//   zipCode: 99021,
// },
// creditCard: {
//   firstName: 'Agne',
//   lastName: 'Urbaityte',
//   middleName: 'Georgia',
//   creditCardNumber: 3010554694321198,
//   expirationMonth: 04,
//   expirationYear: 2027,
//   cvv: 645,
// },
// shippingAddress: {
//   firstName: 'Agne',
//   lastName: 'Urbaityte',
//   middleName: 'Georgia',
//   street: '122-86',
//   city: 'Brooklyn',
//   state: 'New York',
//   country: 'USA',
//   zipCode: 99021,
// },

// billingAddress: {
//   firstName: 'Bobby',
//   lastName: 'Scarnewman',
//   middleName: 'Dude',
//   street: '434',
//   city: 'Norwalk',
//   state: 'Calfornia',
//   country: 'USA',
//   zipCode: 33233,
// },
// creditCard: {
//   firstName: 'Sophie',
//   lastName: 'Scarnewman',
//   middleName: 'The Third',
//   creditCardNumber: 5582930499990000,
//   expirationMonth: 11,
//   expirationYear: 2024,
//   cvv: 991,
// },
// shippingAddress: {
//   firstName: 'Bobby',
//   lastName: 'Scarnewman',
//   middleName: 'Dude',
//   street: '434',
//   city: 'Norwalk',
//   state: 'California',
//   country: 'USA',
//   zipCode: 33233,
// },
