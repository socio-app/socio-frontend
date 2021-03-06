import { setLoadingUser } from '../actions/setLoadingUser'
import axios from '../../axios/axios.js'

export const dailyReset = (payload) => async (dispatch) => {
  try {
    dispatch(setLoadingUser(true))
    const resetUser = await axios({
      url: `/users/${payload._id}/dailyReset`,
      method: 'PATCH',
      headers: { access_token: payload.access_token },
    })
    dispatch({ type: 'FETCH_USER', data: resetUser.data.user })
    dispatch(setLoadingUser(false))
  } catch (err) {
    console.log(err, 'error source: dailyReset')
    dispatch(setLoadingUser(false))
  }
}
