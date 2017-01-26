import { combineReducers } from 'redux'
import auth from './auth'
import toggleTab from './toggleTab'

const authApp = combineReducers({
  auth,
  toggleTab
})

export default authApp
