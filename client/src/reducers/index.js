import { combineReducers } from 'redux'
import toysReducer from './toys_reducer'

export default combineReducers({
  toys: toysReducer
})