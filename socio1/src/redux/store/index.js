import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from '../reducers/userReducer.js'
import { imageReducer } from '../reducers/imageReducer'

const rootReducer = combineReducers({
  user: userReducer,
  image: imageReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
