import axios from '../../axios/axios.js'

export const dailyReset = payload => async dispatch => {
  try {
    const resetUser = await axios({
      url: `/users/${payload._id}/dailyReset`,
      method: 'PATCH',
      headers: { access_token: payload.access_token }
    })
    dispatch({ type: 'FETCH_USER', data: resetUser.data.user })
  } catch (err) {
    console.log(err)
  }
}