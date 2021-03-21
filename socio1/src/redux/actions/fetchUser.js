import axios from '../../axios/axios.js'

export const fetchUser = (payload) => async (dispatch) => {
  try {
    const user = await axios({
      url: `/users/${payload._id}`,
      method: 'GET',
      headers: { access_token: payload.access_token },
    })
    dispatch({ type: 'FETCH_USER', data: user.data.user })
  } catch (err) {
    console.log('err')
  }
}
