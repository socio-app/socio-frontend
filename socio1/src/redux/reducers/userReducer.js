const initialState = {
  user: {},
  access_token: '',
  setExpIncrease: {},
  loadingUser: false,
}

export const userReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_USER') {
    return {
      ...state,
      user: action.data,
    }
  }
  if (action.type === 'FETCH_ACCESS_TOKEN') {
    return {
      ...state,
      access_token: action.data,
    }
  }

  if (action.type === 'SET_LOADING_USER') {
    return {
      ...state,
      loadingUser: action.data,
    }
  }

  return state
}
