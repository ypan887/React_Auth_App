import { combineReducers } from 'redux';
import auth from './auth';
import toggleTab from './toggleTab';
import event from './event';
import input from './input';

const authApp = combineReducers({
  auth,
  event,
  input,
  toggleTab
})

export default authApp
