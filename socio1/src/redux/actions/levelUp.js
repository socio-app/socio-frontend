import axios from '../../axios/axios.js'

export const levelUp = (payload) => async (dispatch) => {
  try {
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
        level: payload.level,
        maxActiveMissions: payload.maxActiveMissions,
      })
    )

    const resetUser = await axios({
      url: `/users/${payload._id}/levelUp`,
      method: 'PATCH',
      headers: { access_token: payload.access_token },
      data: {
        activeMissions: payload.activeMissions,
        statistic: payload.statistic,
        currentExperience: payload.currentExperience,
        level: payload.level,
        maxActiveMissions: payload.maxActiveMissions,
      },
    })

    console.log(resetUser.data.user)
    dispatch({ type: 'FETCH_USER', data: resetUser.data.user })
  } catch (err) {
    console.log(err)
  }
}
