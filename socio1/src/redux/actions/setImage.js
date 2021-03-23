export const setImage = (payload) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_IMAGE', data: payload })
  } catch (err) {
    console.log('err')
  }
}
