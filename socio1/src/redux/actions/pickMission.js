import axios from '../../axios/axios.js'

export const pickMission = payload => async dispatch => {
  try {
    console.log(payload)
    const newUser = await axios({
      url: `/users/${payload._id}/missionUpdate`,
      method: 'PATCH',
      data: {
        statistic: payload.statistic,
        activeMissions: payload.activeMissions,
        missionPool: payload.missionPool
      },
      headers: { access_token: payload.access_token }
    })
    console.log(newUser.data)
  } catch (err) {
    console.log(err)
  }
}