import axios from '../../axios/axios.js'

export const pickMission = (payload) => async (dispatch) => {
  try {
    const newUser = await axios({
      url: `/users/${payload._id}/missionUpdate`,
      method: 'PATCH',
      data: {
        statistic: payload.statistic,
        activeMissions: payload.activeMissions,
        missionPool: payload.missionPool,
      },
      headers: { access_token: payload.access_token },
    })
    dispatch({ type: 'FETCH_USER', data: newUser.data })
  } catch (err) {
    console.log(err)
  }
}
