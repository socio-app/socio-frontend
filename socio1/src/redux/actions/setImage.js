import { setLoadingUser } from '../actions/setLoadingUser'
export const setImage = (payload) => async (dispatch) => {
  try {
    dispatch(setLoadingUser(true))
    dispatch({ type: 'SET_IMAGE', data: payload })
    dispatch(setLoadingUser(false))
  } catch (err) {
    console.log('err')
    dispatch(setLoadingUser(false))
  }
}
