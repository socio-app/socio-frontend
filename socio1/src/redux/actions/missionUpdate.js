import { setLoadingUser } from '../actions/setLoadingUser'
import axios from '../../axios/axios.js'

export const pickMission = (payload) => async (dispatch) => {
  try {
    dispatch(setLoadingUser(true))
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
    dispatch(setLoadingUser(false))
  } catch (err) {
    console.log(err, 'error source: missionUpdate')
    dispatch(setLoadingUser(false))
  }
}
