import Axios from 'axios'

const SET_ALBUMS = 'SET_ALBUMS'

export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums,
})

const dummyData = [
  {
    id: 1,
    band: 'U2',
    name: 'Joshua Three',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0020/7595/1149/products/U2T71591_655b63c3-67fd-454e-9862-dd8fe97c1f1d_2000x.jpg?v=1561047650',
  },
  {
    id: 2,
    band: 'U3',
    name: 'Joshua Three',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0020/7595/1149/products/U2T71591_655b63c3-67fd-454e-9862-dd8fe97c1f1d_2000x.jpg?v=1561047650',
  },
  {
    id: 3,
    band: 'U24',
    name: 'Joshua Three',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0020/7595/1149/products/U2T71591_655b63c3-67fd-454e-9862-dd8fe97c1f1d_2000x.jpg?v=1561047650',
  },
  {
    id: 4,
    band: 'U332',
    name: 'Joshua Three',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0020/7595/1149/products/U2T71591_655b63c3-67fd-454e-9862-dd8fe97c1f1d_2000x.jpg?v=1561047650',
  },
  {
    id: 5,
    band: 'U22',
    name: 'Joshua Three',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0020/7595/1149/products/U2T71591_655b63c3-67fd-454e-9862-dd8fe97c1f1d_2000x.jpg?v=1561047650',
  },
  {
    id: 6,
    band: 'U28',
    name: 'Joshua Three',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0020/7595/1149/products/U2T71591_655b63c3-67fd-454e-9862-dd8fe97c1f1d_2000x.jpg?v=1561047650',
  },
  {
    id: 7,
    band: 'U32',
    name: 'Joshua Three',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0020/7595/1149/products/U2T71591_655b63c3-67fd-454e-9862-dd8fe97c1f1d_2000x.jpg?v=1561047650',
  },
  {
    id: 8,
    band: 'U23',
    name: 'Joshua Three',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0020/7595/1149/products/U2T71591_655b63c3-67fd-454e-9862-dd8fe97c1f1d_2000x.jpg?v=1561047650',
  },
  {
    id: 9,
    band: 'U222',
    name: 'Joshua Three',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0020/7595/1149/products/U2T71591_655b63c3-67fd-454e-9862-dd8fe97c1f1d_2000x.jpg?v=1561047650',
  },
  {
    id: 10,
    band: 'U12',
    name: 'Joshua Three',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0020/7595/1149/products/U2T71591_655b63c3-67fd-454e-9862-dd8fe97c1f1d_2000x.jpg?v=1561047650',
  },
  {
    id: 11,
    band: 'U21',
    name: 'Joshua Three',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0020/7595/1149/products/U2T71591_655b63c3-67fd-454e-9862-dd8fe97c1f1d_2000x.jpg?v=1561047650',
  },
]

// return dispatch => {
//   dispatch(setAlbums(dummyData))
// }
export const fetchNewAlbums = () => {
  return async (dispatch) => {
    try {
      const {data} = await Axios.get(`/api/products`)
      dispatch(setAlbums(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const buy = (id) => {
  return async (dispatch) => {
    try {
      const response = await Axios.post(`/api/cart/${id}`, {quantity: 1})

      console.log('!!Response', response)
      // dispatch(updateUser)
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = []

export default function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALBUMS:
      return action.albums

    default:
      return state
  }
}
