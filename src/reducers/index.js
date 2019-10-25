import {combineReducers} from 'redux'
import message from './message'
import user from './User'
export default combineReducers({
  message,
  user
})