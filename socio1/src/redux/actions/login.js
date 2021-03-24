import axios from '../../axios/axios.js'
import { setLoadingUser } from '../actions/setLoadingUser'

export const login = (payload) => async (dispatch) => {
  try {
    dispatch(setLoadingUser(true))
    const dataAuth = await axios({
      url: '/users/login',
      method: 'POST',
      data: {
        email: payload.email,
        password: payload.password,
      },
    })

    dispatch({ type: 'FETCH_ACCESS_TOKEN', data: dataAuth.data.access_token })
    dispatch({ type: 'FETCH_USER', data: dataAuth.data.user })
    dispatch(setLoadingUser(false))
  } catch (err) {
    console.log(err, 'ErR0r')
    dispatch(setLoadingUser(false))
  }
}
