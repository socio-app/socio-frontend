import axios from '../../axios/axios.js'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const register = (payload) => async (dispatch) => {
  try {
    console.log(payload)
    const dataAuth = await axios({
      url: '/users/register',
      method: 'POST',
      data: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      },
    })

    dispatch({ type: 'FETCH_ACCESS_TOKEN', data: dataAuth.data.access_token })
    dispatch({ type: 'FETCH_USER', data: dataAuth.data.user })
  } catch (err) {
    console.log(err, 'ErR0r')
  }
}
