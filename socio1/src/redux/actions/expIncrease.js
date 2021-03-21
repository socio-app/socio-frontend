import axios from '../../axios/axios.js'

export const expIncrease = (payload) => async (dispatch) => {
  try {
    const resetUser = await axios({
      url: `/users/${payload._id}/expIncrease`,
      method: 'PATCH',
      headers: { access_token: payload.access_token },
      data: {
        activeMissions: payload.activeMissions,
        statistic: payload.statistic,
        currentExperience: payload.currentExperience,
      },
    })
    dispatch({ type: 'FETCH_USER', data: resetUser.data.user })
  } catch (err) {
    console.log(err)
  }
}
