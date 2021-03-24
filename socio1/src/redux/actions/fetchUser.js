import axios from '../../axios/axios.js'
import { setLoadingUser } from '../actions/setLoadingUser'

export const fetchUser = (payload) => async (dispatch) => {
  try {
    dispatch(setLoadingUser(true))
    const user = await axios({
      url: `/users/${payload._id}`,
      method: 'GET',
      headers: { access_token: payload.access_token },
    })
    dispatch({ type: 'FETCH_USER', data: user.data.user })
    dispatch(setLoadingUser(false))
  } catch (err) {
    console.log('err')
    dispatch(setLoadingUser(false))
  }
}
