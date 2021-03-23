const initialState = {
  imageUri: '',
}

export const imageReducer = (state = initialState, action) => {
  if (action.type === 'SET_IMAGE') {
    return {
      ...state,
      imageUri: action.data,
    }
  }

  return state
}
