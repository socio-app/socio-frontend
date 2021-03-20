import axios from '../../axios/axios.js'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const login = payload => async dispatch => {
  try {
    console.log(payload)
    const dataAuth = await axios({
      url: '/users/login',
      method: 'POST',
      data: {
        email: payload.email,
        password: payload.password
      }
    })
    dispatch({ type: 'FETCH_ACCESS_TOKEN', data: dataAuth.data.access_token })
  } catch (err) {
    console.log(err)
  }
}