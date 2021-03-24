export const setLoadingUser = (payload) => async (dispatch) => {
  try {
    console.log(
      'TRYING TO SET LOADING USER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
    )
    dispatch({ type: 'SET_LOADING_USER', data: payload })
  } catch (err) {
    console.log('err')
  }
}
