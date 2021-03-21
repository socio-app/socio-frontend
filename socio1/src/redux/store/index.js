import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from '../reducers/userReducer.js'

const rootReducer = combineReducers({
  user: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))