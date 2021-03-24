import { setLoadingUser } from '../actions/setLoadingUser'
import axios from '../../axios/axios.js'

export const levelUp = (payload) => async (dispatch) => {
  try {
    dispatch(setLoadingUser(true))
    let formData = new FormData()

    formData.append('newImage', {
      uri:
        Platform.OS === 'android'
          ? payload.imageUri
          : payload.imageUri.replace('file://', ''),
      type: 'image/jpeg',
      name: 'imageNew.jpg',
    })

    formData.append(
      'userData',
      JSON.stringify({
        activeMissions: payload.activeMissions,
        statistic: payload.statistic,
        currentExperience: payload.currentExperience,
        level: payload.level,
        maxActiveMissions: payload.maxActiveMissions,
        activeMission_Id: payload.activeMission_Id,
      })
    )

    const resetUser = await axios({
      url: `/users/${payload._id}/levelUp`,
      method: 'PATCH',
      headers: {
        access_token: payload.access_token,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })

    alert(`Congratulation you have leveled up`)
    dispatch({ type: 'FETCH_USER', data: resetUser.data.user })
    dispatch(setLoadingUser(false))
  } catch (err) {
    console.log(err, 'error source: levelUp')
    dispatch(setLoadingUser(false))
  }
}
