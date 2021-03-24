export const setLoadingUser = (payload) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_LOADING_USER', data: payload })
  } catch (err) {
    console.log(err, 'error source: setLoadingUser')
  }
}
