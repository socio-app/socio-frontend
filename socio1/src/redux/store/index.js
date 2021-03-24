import { createStore, applyMiddleware, combineReducers } from 'redux'
import { userReducer } from '../reducers/userReducer.js'
import { imageReducer } from '../reducers/imageReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  user: userReducer,
  image: imageReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
