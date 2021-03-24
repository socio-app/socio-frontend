const initialState = {
  imageUri: '',
  permission: null,
}

export const imageReducer = (state = initialState, action) => {
  if (action.type === 'SET_IMAGE') {
    return {
      ...state,
      imageUri: action.data,
    }
  }

  if (action.type === 'SET_PERMISSION') {
    return {
      ...state,
      permission: action.data,
    }
  }

  return state
}
