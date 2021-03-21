import axios from '../../axios/axios.js'

export const login = (payload) => async (dispatch) => {
  try {
    const dataAuth = await axios({
      url: '/users/login',
      method: 'POST',
      data: {
        email: payload.email,
        password: payload.password,
      },
    })

    dispatch({ type: 'FETCH_ACCESS_TOKEN', data: dataAuth.data.access_token })
    dispatch({ type: 'FETCH_USER', data: dataAuth.data.user })
  } catch (err) {
    console.log(err, 'ErR0r')
  }
}
