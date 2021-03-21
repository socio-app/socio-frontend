import axios from '../../axios/axios.js'

export const updateMission = payload => async dispatch => {
  try {
    const resetUser = await axios({
      url: `/users/${payload._id}/updateMission`,
      method: 'PATCH',
      headers: { access_token: payload.access_token },
      data: {
        activeMissions: payload.activeMissions,
        statistic: payload.statistic,
        currentExperience: payload.currentExperience,
        level: payload.level
      }
    })
    dispatch({ type: 'FETCH_USER', data: resetUser.data.user })
  } catch (err) {
    console.log(err)
  }
}