import { setLoadingUser } from '../actions/setLoadingUser'
import axios from '../../axios/axios.js'

export const expIncrease = (payload) => async (dispatch) => {
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
        activeMission_Id: payload.activeMission_Id,
      })
    )

    const resetUser = await axios({
      url: `/users/${payload._id}/expIncrease`,
      method: 'PATCH',
      headers: {
        access_token: payload.access_token,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })

    dispatch({ type: 'FETCH_USER', data: resetUser.data.user })
    dispatch(setLoadingUser(false))
  } catch (err) {
    console.log(err, 'error source: expIncrease')
    dispatch(setLoadingUser(false))
  }
}
